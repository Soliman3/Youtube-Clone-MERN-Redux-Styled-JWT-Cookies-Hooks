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
        },
        fetchingLikes: (state, action) => {
            if (!state.currentVideo.likes.includes(action.payload)) {
                state.currentVideo.likes.push(action.payload);
                //if i disliked before i will remove this dislikes
                state.currentVideo.dislikes.splice(state.currentVideo.dislikes.findIndex(userId => userId === action.payload), 1);
            }
        },
        fetchingDislikes: (state, action) => {
            if (!state.currentVideo.dislikes.includes(action.payload)) {
                state.currentVideo.dislikes.push(action.payload);
                //if i liked before i will remove this likes
                state.currentVideo.likes.splice(state.currentVideo.likes.findIndex(userId => userId === action.payload), 1);
            }
        }
    },
})
  
export const { fetchingFailure, fetchingStart, fetchingSuccess, fetchingLikes, fetchingDislikes } = videoSlice.actions

export default videoSlice.reducer 