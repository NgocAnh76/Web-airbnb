import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const settingSlice = createSlice({
  name: 'settingSlice',
  initialState,
  reducers: {},
});

export const settingActions = settingSlice.actions;
export default settingSlice.reducer;
