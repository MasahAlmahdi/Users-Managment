import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedUser: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    }
  },
});

export const { setSelectedUser, clearSelectedUser } = userSlice.actions;
export default userSlice.reducer;
