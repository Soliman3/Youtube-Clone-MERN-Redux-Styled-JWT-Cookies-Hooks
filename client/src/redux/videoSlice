import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentUser: null,
    isfetching: false,
    error: false,
}

export const videoSlice = createSlice({
    name: 'video',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.isfetching = true; 
        },
        loginSuccess: (state, action) => {
            state.isfetching = false;
            state.currentUser = action.payload;
        },
        loginFailure: (state) => {
            state.isfetching = false;
            state.error = true;
        },
        logout: (state) => {
            state.currentUser = null;
            state.isfetching = false;
            state.error = false;
        }
    },
})
  
export const { loginFailure, loginStart, loginSuccess, logout } = videoSlice.actions

export default videoSlice.reducer 