import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import tmdbApi from 'api/tmdbApi';

const initialState = {
    movies: [],
    loading: false,
    errorMessage: '',
    success: false,
}

export const getPopularMovies = createAsyncThunk(
    'moviePopular/getPopularMovie',
    async (thunkAPI) => {
        try {
            const params = {}
            const data = await tmdbApi.getMoviesList("popular", { params })
            return data

        } catch (error) {
            console.log(error)
            return thunkAPI.rejectWithValue(error)
        }
    }
)

const moviePopularSlice = createSlice({
    name: 'moviePopular',
    initialState,
    reducers: {
        resetStatus: state => {
            state.loading = false
            state.error = false
            state.success = false
        }
    },
    extraReducers: {
        [getPopularMovies.pending]: (state) => {
            state.loading = true
        },
        [getPopularMovies.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.success = true
            state.movies = payload.results
        },
        [getPopularMovies.rejected]: (state, { payload }) => {
            state.loading = false
            state.errorMessage = payload
        },
    }
});

export const { resetStatus } = moviePopularSlice.actions

export default moviePopularSlice.reducer