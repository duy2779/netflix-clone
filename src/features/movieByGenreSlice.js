import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { MOVIES_BY_GENRES } from './config'

const initialState = {
    movies: {},
    loading: false,
    errorMessage: '',
    success: false,
}

export const getMoviesByGenre = createAsyncThunk(
    'movieByGenre/getMoviesByGenre',
    async ({ genreId, genreName, page }, thunkAPI) => {
        try {
            const response = await axios.get(MOVIES_BY_GENRES + `&page=${page}&with_genres=${genreId}`)
            return { genreName, genreId, payload: response.data }

        } catch (error) {
            console.log(error)
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
)

const movieByGenreSlice = createSlice({
    name: 'movieByGenre',
    initialState,
    reducers: {
        resetStatus: state => {
            state.loading = false
            state.error = false
            state.success = false
        }
    },
    extraReducers: {
        [getMoviesByGenre.pending]: (state) => {
            state.loading = true
        },
        [getMoviesByGenre.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.success = true
            const genreName = payload.genreName
            const genreId = payload.genreId
            const movies = payload.payload.results
            const page = payload.payload.page
            if (state.movies.hasOwnProperty(genreId)) {
                if (page > 1) {
                    state.movies[genreId].results = [...state.movies[genreId].results, ...movies]
                    state.movies[genreId].page = page
                }
            } else {
                state.movies[genreId] = { name: genreName, results: [...movies], page }
            }
        },
        [getMoviesByGenre.rejected]: (state, { payload }) => {
            state.loading = false
            state.errorMessage = payload
        },
    }
});

export const { resetStatus } = movieByGenreSlice.actions

export default movieByGenreSlice.reducer