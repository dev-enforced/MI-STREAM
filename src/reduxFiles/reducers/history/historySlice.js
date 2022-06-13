import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addVideoToHistoryService,
  removeVideoFromHistoryService,
  receiveAllHistoryVideosService,
  clearEntireHistoryService,
} from "services";

const initialState = {
  status: null,
  historyVideosList: [],
  error: null,
};

const receiveAllHistoryVideosHandler = async (
  tokenProvided,
  { rejectWithValue }
) => {
  try {
    const {
      data: { history: historyVideosResponse },
    } = await receiveAllHistoryVideosService(tokenProvided);
    return historyVideosResponse;
  } catch (receiveAllHistoryVideosError) {
    console.error(
      "AN ERROR OCCURED WHILE RECEIVING VIDEOS IN HISTORY THROUGH REDUX IMPLEMENTATION"
    );
    return rejectWithValue("Error in receiving items from history");
  }
};

const addNewVideoToHistoryHandler = async (
  { videoDetailsGiven, tokenProvided },
  { rejectWithValue }
) => {
  try {
    const {
      data: { history: historyVideosResponse },
    } = await addVideoToHistoryService(videoDetailsGiven, tokenProvided);
    return historyVideosResponse;
  } catch (addNewVideoToHistoryError) {
    console.error(
      "AN ERROR OCCURED WHILE ADDING VIDEOS IN HISTORY THROUGH REDUX IMPLEMENTATION"
    );
    return rejectWithValue("Error in adding video to history");
  }
};

const removeExistingVideoFromHistoryHandler = async (
  { videoDetailsGiven, tokenProvided },
  { rejectWithValue }
) => {
  try {
    const {
      data: { history: historyVideosResponse },
    } = await removeVideoFromHistoryService(videoDetailsGiven, tokenProvided);
    return historyVideosResponse;
  } catch (removeExistingVideoFromHistoryError) {
    console.error(
      "AN ERROR OCCURED WHILE REMOVING A VIDEOS FROM HISTORY THROUGH REDUX IMPLEMENTATION"
    );
    return rejectWithValue("Error occured in removing a video from history");
  }
};

const clearEntireHistoryHandler = async (
  tokenProvided,
  { rejectWithValue }
) => {
  try {
    const {
      data: { history: historyVideosResponse },
    } = await clearEntireHistoryService(tokenProvided);
    return historyVideosResponse;
  } catch (clearEntireHistoryError) {
    console.error(
      "An error occured while clearing all videos of history through Redux implementation"
    );
    return rejectWithValue("AN ERROR OCCURED WHILE CLEARING HISTORY");
  }
};

const receiveAllHistoryVideos = createAsyncThunk(
  "userHistory/recieveAllHistoryVideos",
  receiveAllHistoryVideosHandler
);

const addNewVideoToHistory = createAsyncThunk(
  "userHistory/addNewVideoToHistory",
  addNewVideoToHistoryHandler
);

const removeExistingVideoFromHistory = createAsyncThunk(
  "userHistory/removeExistingVideoFromHistory",
  removeExistingVideoFromHistoryHandler
);

const clearEntireHistory = createAsyncThunk(
  "userHistory/clearEntireHistory",
  clearEntireHistoryHandler
);

const historySlice = createSlice({
  name: "userHistory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(receiveAllHistoryVideos.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(receiveAllHistoryVideos.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.historyVideosList = action.payload;
      })
      .addCase(receiveAllHistoryVideos.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      })
      .addCase(addNewVideoToHistory.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(addNewVideoToHistory.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.historyVideosList = action.payload;
      })
      .addCase(addNewVideoToHistory.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      })
      .addCase(removeExistingVideoFromHistory.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(removeExistingVideoFromHistory.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.historyVideosList = action.payload;
      })
      .addCase(removeExistingVideoFromHistory.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      })
      .addCase(clearEntireHistory.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(clearEntireHistory.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.historyVideosList = action.payload;
      })
      .addCase(clearEntireHistory.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      });
  },
});
export {
  receiveAllHistoryVideos,
  addNewVideoToHistory,
  clearEntireHistory,
  removeExistingVideoFromHistory,
};
export default historySlice.reducer;
