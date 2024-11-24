import { configureStore } from '@reduxjs/toolkit';
import favouritesReducer from './favouritesSlice';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    favourites: favouritesReducer,
    users: userReducer,
  },
});
