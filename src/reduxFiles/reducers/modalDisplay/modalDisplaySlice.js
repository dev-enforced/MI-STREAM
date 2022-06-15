import { createSlice } from "@reduxjs/toolkit";
const initialModalState = {
  modalDisplay: false,
};
const modalDisplaySlice = createSlice({
  name: "modalDisplaySlice",
  initialState: initialModalState,
  reducers: {
    toggleModalDisplay: (state) => {
      state.modalDisplay = !state.modalDisplay;
    },
  },
});
export const { toggleModalDisplay } = modalDisplaySlice.actions;
export default modalDisplaySlice.reducer;
