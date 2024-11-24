import { configureStore } from '@reduxjs/toolkit';
import favouritesReducer from './favSlice';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    favourites: favouritesReducer,
    user: userReducer,
  },
});
