import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import tmdbApi from 'api/tmdbApi';

const initialState = {
    movies: [],
    loading: false,
    errorMessage: '',
    success: false,
}

export const getTopRatedMovies = createAsyncThunk(
    'movieTopRated/getTopRatedMovies',
    async (thunkAPI) => {
        try {
            const params = {}
            const data = await tmdbApi.getMoviesList("top_rated", { params })
            return data

        } catch (error) {
            console.log(error)
            return thunkAPI.rejectWithValue(error)
        }
    }
)

const movieTopRatedSlice = createSlice({
    name: 'movieTopRated',
    initialState,
    reducers: {
        resetStatus: state => {
            state.loading = false
            state.error = false
            state.success = false
        }
    },
    extraReducers: {
        [getTopRatedMovies.pending]: (state) => {
            state.loading = true
        },
        [getTopRatedMovies.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.success = true
            state.movies = payload.results
        },
        [getTopRatedMovies.rejected]: (state, { payload }) => {
            state.loading = false
            state.errorMessage = payload
        },
    }
});

export const { resetStatus } = movieTopRatedSlice.actions

export default movieTopRatedSlice.reducer