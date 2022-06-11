import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addVideoToWatchLaterService,
  receiveAllWatchLaterVideosService,
  removeVideoFromWatchLaterService,
} from "services";
const initialState = {
  status: null,
  watchLaterVideosList: [],
};

const receiveAllWatchLaterVideosHandler = async (tokenProvided) => {
  try {
    const {
      data: { watchlater: watchLaterVideosResponseReceived },
    } = await receiveAllWatchLaterVideosService(tokenProvided);
    return watchLaterVideosResponseReceived;
  } catch (receiveAllWatchLaterVideosError) {
    console.error(
      "AN ERROR OCCURED WHILE RECEIVING ALL WATCH LATER VIDEOS THROUGH REDUX"
    );
    return Promise.error(receiveAllWatchLaterVideosError);
  }
};

const addNewVideoToWatchLaterHandler = async ({
  videoDetailsGiven,
  tokenProvided,
}) => {
  try {
    const {
      data: { watchlater: watchLaterVideosResponseReceived },
    } = await addVideoToWatchLaterService(videoDetailsGiven, tokenProvided);
    return watchLaterVideosResponseReceived;
  } catch (addNewVideoToWatchLaterError) {
    console.error(
      "AN ERROR OCCURED WHILE ADDING A VIDEO TO WATCH LATER SECTION THROUGH REDUX"
    );
    return Promise.error(addNewVideoToWatchLaterError);
  }
};

const removeExistingVideoFromWatchLaterHandler = async ({
  videoDetailsGiven,
  tokenProvided,
}) => {
  try {
    const {
      data: { watchlater: watchLaterVideosResponseReceived },
    } = await removeVideoFromWatchLaterService(
      videoDetailsGiven,
      tokenProvided
    );
    return watchLaterVideosResponseReceived;
  } catch (addNewVideoToWatchLaterError) {
    console.error(
      "AN ERROR OCCURED WHILE REMOVING A VIDEO FROM WATCH LATER SECTION THROUGH REDUX"
    );
    return Promise.error(addNewVideoToWatchLaterError);
  }
};

const receiveAllWatchLaterVideos = createAsyncThunk(
  "userWatchLater/receiveAllWatchLaterVideos",
  receiveAllWatchLaterVideosHandler
);
const addNewVideoToWatchLater = createAsyncThunk(
  "userWatchLater/addNewVideoToWatchLater",
  addNewVideoToWatchLaterHandler
);
const removeExistingVideoFromWatchLater = createAsyncThunk(
  "userWatchLater/removeExistingVideoFromWatchLater",
  removeExistingVideoFromWatchLaterHandler
);
const watchLaterSlice = createSlice({
  name: "userWatchLater",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(receiveAllWatchLaterVideos.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.watchLaterVideosList = action.payload;
      })
      .addCase(addNewVideoToWatchLater.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.watchLaterVideosList = action.payload;
      })
      .addCase(removeExistingVideoFromWatchLater.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.watchLaterVideosList = action.payload;
      });
  },
});
export {
  receiveAllWatchLaterVideos,
  addNewVideoToWatchLater,
  removeExistingVideoFromWatchLater,
};
export default watchLaterSlice.reducer;
