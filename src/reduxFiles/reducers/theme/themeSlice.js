import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  themeProvided: false,
};
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    updateTheme: (state) => {
      state.themeProvided = !state.themeProvided;
    },
  },
});
export const { updateTheme } = themeSlice.actions;
export default themeSlice.reducer;
