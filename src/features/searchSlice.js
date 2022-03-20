import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    moviesData: [],
    prevRoute: "/",
}

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setPrevRoute: (state, { payload }) => {
            state.prevRoute = payload
        }
    }
});

export const { setPrevRoute } = searchSlice.actions

export default searchSlice.reducer