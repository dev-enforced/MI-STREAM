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
  videoSelected: {},
  error: null,
};

const receiveAllUserPlaylistsHandler = async (
  tokenProvided,
  { rejectWithValue }
) => {
  try {
    const {
      data: { playlists: playlistsReceivedFromResponse },
    } = await receiveAllUserPlaylistsService(tokenProvided);
    return playlistsReceivedFromResponse;
  } catch (receiveAllUserPlaylistsError) {
    console.error(
      "AN ERROR OCCURRED WHILE RECEIVING ALL PLAYLISTS THROUGH REDUX"
    );
    return rejectWithValue(
      "ERROR OCCURRED WHILE RECEIVING ALL PLAYLISTS. PLEASE TRY AGAIN LATER"
    );
  }
};

const createNewPlaylistHandler = async (
  { playlistDetailsGiven, tokenProvided },
  { rejectWithValue }
) => {
  try {
    const {
      data: { playlists: playlistsReceivedFromResponse },
    } = await createNewPlaylistService(playlistDetailsGiven, tokenProvided);
    return playlistsReceivedFromResponse;
  } catch (createNewPlaylistError) {
    console.error("AN ERROR OCCURRED WHILE CREATING A PLAYLIST THROUGH REDUX");
    return rejectWithValue(
      "Error occured in creating this playlist. Please try again"
    );
  }
};

const deleteExistingPlaylistHandler = async (
  { playlistDetailsGiven, tokenProvided },
  { rejectWithValue }
) => {
  try {
    const {
      data: { playlists: playlistsReceivedFromResponse },
    } = await deleteExistingPlaylistService(
      playlistDetailsGiven,
      tokenProvided
    );
    return playlistsReceivedFromResponse;
  } catch (createNewPlaylistError) {
    console.error("AN ERROR OCCURRED WHILE DELETING A PLAYLIST THROUGH REDUX");
    return rejectWithValue(
      "Error occured in deleting this playlist. Please try again"
    );
  }
};

const receiveSinglePlaylistDetailsHandler = async (
  { playlistDetailsGiven, tokenProvided },
  { rejectWithValue }
) => {
  try {
    const {
      data: { playlist: playlistDataReceivedFromResponse },
    } = await receiveSinglePlaylistDetailsService(
      playlistDetailsGiven,
      tokenProvided
    );
    return playlistDataReceivedFromResponse;
  } catch (receiveSinglePlaylistDetailsError) {
    console.error(
      "AN ERROR OCCURRED WHILE FETCHING A SINGLE PLAYLIST DETAILS THROUGH REDUX"
    );
    return rejectWithValue(
      "Error occured in fetching this playlist details. Please try again"
    );
  }
};

const addNewVideoToPlaylistHandler = async (
  { playlistDetailsGiven, videoToBeAdded, tokenProvided },
  { rejectWithValue }
) => {
  try {
    const {
      data: { playlist: playlistDataReceivedFromResponse },
    } = await addNewVideoToPlaylistService(
      playlistDetailsGiven,
      videoToBeAdded,
      tokenProvided
    );
    return playlistDataReceivedFromResponse;
  } catch (addNewVideoToPlaylistError) {
    console.error(
      "AN ERROR OCCURED WHILE ADDING THIS VIDEO TO THIS PLAYLIST THROUGH REDUX"
    );
    return rejectWithValue(
      "Error occured while adding this video to a playlist. Please try again"
    );
  }
};

const deleteExistingVideoFromPlaylistHandler = async (
  { playlistDetailsGiven, videoToBeDeleted, tokenProvided },
  { rejectWithValue }
) => {
  try {
    const {
      data: { playlist: playlistDataReceivedFromResponse },
    } = await deleteExistingVideoFromPlaylistService(
      playlistDetailsGiven,
      videoToBeDeleted,
      tokenProvided
    );
    return playlistDataReceivedFromResponse;
  } catch (deleteExistingVideoFromPlaylistError) {
    console.error(
      "AN ERROR OCCURED WHILE ADDING THIS VIDEO TO THIS PLAYLIST THROUGH REDUX"
    );
    return rejectWithValue(
      "Error occured while adding this video to a playlist. Please try again"
    );
  }
};

const receiveAllUserPlaylists = createAsyncThunk(
  "userPlaylists/receiveAllUserPlaylists",
  receiveAllUserPlaylistsHandler
);
const createNewPlaylist = createAsyncThunk(
  "userPlaylists/createNewPlaylist",
  createNewPlaylistHandler
);
const deleteExistingPlaylist = createAsyncThunk(
  "userPlaylists/deleteExistingPlaylist",
  deleteExistingPlaylistHandler
);
const receiveSinglePlaylistDetails = createAsyncThunk(
  "userPlaylists/receiveSinglePlaylistDetailsHandler",
  receiveSinglePlaylistDetailsHandler
);
const addNewVideoToPlaylist = createAsyncThunk(
  "userPlaylists/addNewVideoToPlaylist",
  addNewVideoToPlaylistHandler
);
const deleteExistingVideoFromPlaylist = createAsyncThunk(
  "userPlaylists/deleteExistingVideoFromPlaylist",
  deleteExistingVideoFromPlaylistHandler
);

const playlistsSlice = createSlice({
  name: "userPlaylists",
  initialState: initialPlaylistState,
  reducers: {
    updateVideoSelected: (state, action) => {
      state.videoSelected = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(receiveAllUserPlaylists.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(receiveAllUserPlaylists.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.playlistsProvided = action.payload;
      })
      .addCase(receiveAllUserPlaylists.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      })
      .addCase(createNewPlaylist.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(createNewPlaylist.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.playlistsProvided = action.payload;
      })
      .addCase(createNewPlaylist.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      })
      .addCase(deleteExistingPlaylist.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(deleteExistingPlaylist.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.playlistsProvided = action.payload;
      })
      .addCase(deleteExistingPlaylist.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      })
      .addCase(receiveSinglePlaylistDetails.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(receiveSinglePlaylistDetails.fulfilled, (state, action) => {
        state.status = "fulfilled";
      })
      .addCase(receiveSinglePlaylistDetails.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      })
      .addCase(addNewVideoToPlaylist.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(addNewVideoToPlaylist.fulfilled, (state, action) => {
        state.status = "fulfilled";
        const playlistsUpdated = state.playlistsProvided.map((everyPlaylist) =>
          everyPlaylist._id === action.payload._id
            ? action.payload
            : everyPlaylist
        );
        state.playlistsProvided = playlistsUpdated;
      })
      .addCase(addNewVideoToPlaylist.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      })
      .addCase(deleteExistingVideoFromPlaylist.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(deleteExistingVideoFromPlaylist.fulfilled, (state, action) => {
        state.status = "fulfilled";
        const playlistsUpdated = state.playlistsProvided.map((everyPlaylist) =>
          everyPlaylist._id === action.payload._id
            ? action.payload
            : everyPlaylist
        );
        state.playlistsProvided = playlistsUpdated;
      })
      .addCase(deleteExistingVideoFromPlaylist.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      });
  },
});
export const { updateVideoSelected } = playlistsSlice.actions;
export {
  receiveAllUserPlaylists,
  createNewPlaylist,
  deleteExistingPlaylist,
  receiveSinglePlaylistDetails,
  addNewVideoToPlaylist,
  deleteExistingVideoFromPlaylist,
};
export default playlistsSlice.reducer;
