import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../reducers/theme/themeSlice";
import sidebarReducer from "../reducers/sidebar/sidebarSlice";
import videosReducer from "../reducers/videos/videosSlice";
import categoriesReducer from "../reducers/categories/categoriesSlice";
import authenticationReducer from "../reducers/authentication/authenticationSlice";
import likesReducer from "../reducers/likes/likesSlice";
import watchLaterReducer from "../reducers/watch-later/watchLaterSlice";
import historyReducer from "../reducers/history/historySlice";
import playlistsReducer from "../reducers/playlists/playlistsSlice";
const storeGiven = configureStore({
  reducer: {
    theme: themeReducer,
    sidebar: sidebarReducer,
    videos: videosReducer,
    category: categoriesReducer,
    authenticationStore: authenticationReducer,
    likesStore: likesReducer,
    watchLaterStore: watchLaterReducer,
    historyStore: historyReducer,
    playlistsStore: playlistsReducer,
  },
});
export { storeGiven };
