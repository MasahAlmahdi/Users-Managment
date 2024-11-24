import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favourites: [],
};

const favSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addfavourite: (state, action) => {
      const user = action.payload;
      if (!state.favourites.find((fav) => fav.id === user.id)) {
        state.favourites.push(user);
      }
    },
    removefavourite: (state, action) => {
      state.favourites = state.favourites.filter((fav) => fav.id !== action.payload.id);
    },
  },
});

export const { addfavourite, removefavourite } = favSlice.actions;
export default favSlice.reducer;
