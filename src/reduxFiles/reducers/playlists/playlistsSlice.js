import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addNewVideoToPlaylistService,
  createNewPlaylistService,
  deleteExistingPlaylistService,
  deleteExistingVideoFromPlaylistService,
  receiveAllUserPlaylistsService,
  receiveSinglePlaylistDetailsService,
} from "services";
const initialPlaylistState = {
  status: null,
  playlistsProvided: [],
  playlistSelected: {},
  error: null,
};

const playlistsSlice = createSlice({
  name: "userPlaylists",
  initialState: initialPlaylistState,
  reducers: {},
});
export default playlistsSlice.reducer;
