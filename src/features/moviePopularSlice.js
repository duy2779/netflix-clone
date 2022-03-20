import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { UPCOMING_BASE_URL } from './config'

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
            const response = await axios.get(UPCOMING_BASE_URL)
            return response.data

        } catch (error) {
            console.log(error)
            return thunkAPI.rejectWithValue(error.response.data)
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