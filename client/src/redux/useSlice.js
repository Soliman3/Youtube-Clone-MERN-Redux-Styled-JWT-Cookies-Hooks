import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    isfetching: false,
    error: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.isfetching = true; 
        },
        loginSuccess: (state, action) => {
            state.isfetching = false;
            state.user = action.payload;
        },
        loginFailure: (state) => {
            state.isfetching = false;
            state.error = true;
        },
        logout: (state) => {
            state.user = null;
            state.isfetching = false;
            state.error = false;
        }
    },
})
  
export const { loginFailure, loginStart, loginSuccess, logout } = userSlice.actions

export default userSlice.reducer 