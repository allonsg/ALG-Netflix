import { createSlice } from "@reduxjs/toolkit";

export const themeModelSlice = createSlice({
  name: "ThemeMode",
  initialState: {
    themeMode: "dark",
  },
  reducers: {
    setThemeMode: (state, { payload }) => {
      state.themeMode = payload;
    },
  },
});

export const { setThemeMode } = themeModelSlice.actions;

export default themeModelSlice.reducer;
