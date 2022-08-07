import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentUser: null,
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
        },
        subscription: (state, action) => {
            if (state.currentUser.subscribedChannels.includes(action.payload)) {
                state.currentUser.subscribedChannels.splice(state.currentUser.subscribedChannels.findIndex((channelId) => channelId === action.payload), 1);
            } else {
                state.currentUser.subscribedChannels.push(action.payload);
            }
        }
    },
})
  
export const { loginFailure, loginStart, loginSuccess, logout, subscription } = userSlice.actions

export default userSlice.reducer 