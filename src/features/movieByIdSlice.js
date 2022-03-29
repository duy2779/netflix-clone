import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import tmdbApi from 'api/tmdbApi';

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
            const data = await tmdbApi.getMovieDetail(movieId)
            return data

        } catch (error) {
            console.log(error)
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const getCreditsByMovie = createAsyncThunk(
    'movieById/getCreditsByMovie',
    async ({ movieId }, thunkAPI) => {
        try {
            const data = await tmdbApi.getCredits(movieId);
            return data

        } catch (error) {
            console.log(error)
            return thunkAPI.rejectWithValue(error)
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