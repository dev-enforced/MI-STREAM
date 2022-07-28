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
    closeSidebarView: (state) => {
      state.sidebarView = false;
    },
    openSidebarView:(state)=>{
      state.sidebarView=true;
    }
  },
});
export const { updateSidebarView, closeSidebarView,openSidebarView } = sidebarSlice.actions;
export default sidebarSlice.reducer;
