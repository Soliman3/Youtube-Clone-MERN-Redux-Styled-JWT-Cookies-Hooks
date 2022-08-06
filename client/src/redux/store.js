import { configureStore } from '@reduxjs/toolkit';
import userReducer from './useSlice';
import videoReducer from './videoSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    video: videoReducer,
  },
})