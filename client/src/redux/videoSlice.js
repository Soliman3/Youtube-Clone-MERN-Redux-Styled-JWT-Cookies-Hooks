import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentVideo: null,
    isfetching: false,
    error: false,
}

export const videoSlice = createSlice({
    name: 'video',
    initialState,
    reducers: {
        fetchingStart: (state) => {
            state.isfetching = true; 
        },
        fetchingSuccess: (state, action) => {
            state.isfetching = false;
            state.currentVideo = action.payload;
        },
        fetchingFailure: (state) => {
            state.isfetching = false;
            state.error = true;
        }
    },
})
  
export const { fetchingFailure, fetchingStart, fetchingSuccess } = videoSlice.actions

export default videoSlice.reducer 