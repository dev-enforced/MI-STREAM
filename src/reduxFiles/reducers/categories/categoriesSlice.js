import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { receiveAllCategories } from "services";
const initialState = {
  status: null,
  categoriesList: [],
};
const categoriesSetup = async () => {
  try {
    const {
      data: { categories: categoriesAvailable },
    } = await receiveAllCategories();
    return categoriesAvailable;
  } catch (categoriesSetupError) {
    console.error("ERROR OCCURED WHILE SETTING UP DATA FROM CATEGORIES");
    return Promise.error(categoriesSetupError);
  }
};

const getCategories = createAsyncThunk(
  "categories/getCategories",
  categoriesSetup
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: {
    [getCategories.pending]: (state, action) => {
      state.status = "pending";
    },
    [getCategories.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.categoriesList = action.payload;
    },
    [getCategories.failed]: (state, action) => {
      state.status = "failed";
    },
  },
});
export { getCategories };
export default categoriesSlice.reducer;
