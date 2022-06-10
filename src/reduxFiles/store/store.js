import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../reducers/theme/themeSlice";
import sidebarReducer from "../reducers/sidebar/sidebarSlice";
import videosReducer from "../reducers/videos/videosSlice";
import categoriesReducer from "../reducers/categories/categoriesSlice";
import authenticationReducer from "../reducers/authentication/authenticationSlice";
import likesReducer from "../reducers/likes/likesSlice";
const storeGiven = configureStore({
  reducer: {
    theme: themeReducer,
    sidebar: sidebarReducer,
    videos: videosReducer,
    category: categoriesReducer,
    authenticationStore: authenticationReducer,
    likesStore: likesReducer,
  },
});
export { storeGiven };
