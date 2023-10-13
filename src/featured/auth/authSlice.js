import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: false,
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    UserLoogedIn(state, action) {
      state.user = action.payload;
    },
    UserLoogedOut(state, action) {
      state.user = action.payload;
    },
  },
});

export const {UserLoogedIn, UserLoogedOut} = authSlice.actions;
export default authSlice.reducer;
