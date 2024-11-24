import { configureStore } from '@reduxjs/toolkit';
import favReducer from './favSlice';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    favourites: favReducer,
    user: userReducer,
  },
});
