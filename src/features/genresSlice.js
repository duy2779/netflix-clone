import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { GENRE_BASE_URL } from './config'

const initialState = {
    genres: [],
    loading: false,
    errorMessage: '',
    success: false,
}

export const getGenres = createAsyncThunk(
    'genres/getGenres',
    async (thunkAPI) => {
        try {
            const response = await axios.get(GENRE_BASE_URL)
            return response.data

        } catch (error) {
            console.log(error)
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
)

const genresSlice = createSlice({
    name: 'genres',
    initialState,
    reducers: {
        resetStatus: state => {
            state.loading = false
            state.error = false
            state.success = false
        }
    },
    extraReducers: {
        [getGenres.pending]: (state) => {
            state.loading = true
        },
        [getGenres.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.success = true
            state.genres = payload.genres
        },
        [getGenres.rejected]: (state, { payload }) => {
            state.loading = false
            state.errorMessage = payload
        },
    }
});

export const { resetStatus } = genresSlice.actions

export default genresSlice.reducer