import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { TOP_RATED_BASE_URL } from './config'

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
            const response = await axios.get(TOP_RATED_BASE_URL)
            return response.data

        } catch (error) {
            console.log(error)
            return thunkAPI.rejectWithValue(error.response.data)
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