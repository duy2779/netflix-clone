import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { movieById, creditsByMovie } from './config'

const initialState = {
    movie: {},
    credits: {},
    loading: false,
    error: false,
    success: false,
}

export const getMovieById = createAsyncThunk(
    'movieById/getMovieById',
    async ({ movieId }, thunkAPI) => {
        try {
            const response = await axios.get(movieById(movieId));
            return response.data

        } catch (error) {
            console.log(error)
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
)

export const getCreditsByMovie = createAsyncThunk(
    'movieById/getCreditsByMovie',
    async ({ movieId }, thunkAPI) => {
        try {
            const response = await axios.get(creditsByMovie(movieId));
            return response.data

        } catch (error) {
            console.log(error)
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
)

const movieByIdSlice = createSlice({
    name: 'movieById',
    initialState,
    reducers: {
        resetStatus: state => {
            state.loading = false
            state.error = false
            state.success = false
        },
        clearData: state => initialState
    },
    extraReducers: {
        [getMovieById.pending]: (state) => {
            state.loading = true
        },
        [getMovieById.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.success = true
            state.movie = payload
        },
        [getMovieById.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = true
        },
        // Get credits
        [getCreditsByMovie.fulfilled]: (state, { payload }) => {
            state.credits = payload
        },
        [getCreditsByMovie.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = true
        }
    }
});

export const { resetStatus, clearData } = movieByIdSlice.actions

export default movieByIdSlice.reducer