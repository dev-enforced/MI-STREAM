import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  sidebarView: false,
};
const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    updateSidebarView: (state) => {
      state.sidebarView = !state.sidebarView;
    },
  },
});
export const { updateSidebarView } = sidebarSlice.actions;
export default sidebarSlice.reducer;
