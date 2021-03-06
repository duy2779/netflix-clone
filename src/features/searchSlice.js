import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import tmdbApi from 'api/tmdbApi';

const initialState = {
    moviesData: {},
    prevRoute: "/browse",
    loading: false,
    error: false,
    success: false
}

export const getMovies = createAsyncThunk(
    'search/getMovies',
    async ({ query, page }, thunkAPI) => {
        try {
            const params = { query, page }
            const data = await tmdbApi.search({ params })
            return data

        } catch (error) {
            console.log(error)
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
)

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setPrevRoute: (state, { payload }) => {
            state.prevRoute = payload
        },
        resetState: state => initialState
    },
    extraReducers: {
        [getMovies.pending]: (state) => {
            state.loading = true
        },
        [getMovies.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.success = true
            if (payload.page === 1) {
                state.moviesData = payload
            } else {
                state.moviesData.results = [...state.moviesData.results, ...payload.results]
                state.moviesData.page = payload.page
            }
        },
        [getMovies.rejected]: (state, { payload }) => {
            state.loading = false
            state.errorMessage = payload
        },
    }
});

export const { setPrevRoute } = searchSlice.actions

export default searchSlice.reducer