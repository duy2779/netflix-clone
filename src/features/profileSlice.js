import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    profile: JSON.parse(sessionStorage.getItem('profile')) || { name: '', picture: '' },
    loading: false,
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        selectProfile: (state, { payload }) => {
            state.profile = payload
            sessionStorage.setItem('profile', JSON.stringify(payload))
            state.loading = true
        },
        clearLoading: state => {
            state.loading = false
        }
    }
});

export const {
    selectProfile, clearLoading
} = profileSlice.actions
export default profileSlice.reducer