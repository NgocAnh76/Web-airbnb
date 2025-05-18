import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  info: null,
  // isLogin: !!getAccessToken(),
  isLogin: false,
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    login: (state, action) => {
      state.info = action.payload;
      state.isLogin = true;
    },
    logout: (state) => {
      state.info = null;
      state.isLogin = false;
    },
    setUserInfo: (state, action) => {
      state.info = action.payload;
    },
  },
});
export const { login, logout, setUserInfo } = userSlice.actions;

export default userSlice.reducer;
