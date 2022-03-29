import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import tmdbApi from 'api/tmdbApi';

const initialState = {
    movies: [],
    loading: false,
    errorMessage: '',
    success: false,
}

export const getUpComingMovies = createAsyncThunk(
    'movieUpComing/getUpComingMovies',
    async (thunkAPI) => {
        try {
            const params = {}
            const data = await tmdbApi.getMoviesList("upcoming", { params })
            return data

        } catch (error) {
            console.log(error)
            return thunkAPI.rejectWithValue(error)
        }
    }
)

const movieUpComingSlice = createSlice({
    name: 'movieUpComing',
    initialState,
    reducers: {
        resetStatus: state => {
            state.loading = false
            state.error = false
            state.success = false
        }
    },
    extraReducers: {
        [getUpComingMovies.pending]: (state) => {
            state.loading = true
        },
        [getUpComingMovies.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.success = true
            state.movies = payload.results
        },
        [getUpComingMovies.rejected]: (state, { payload }) => {
            state.loading = false
            state.errorMessage = payload
        },
    }
});

export const { resetStatus } = movieUpComingSlice.actions

export default movieUpComingSlice.reducer