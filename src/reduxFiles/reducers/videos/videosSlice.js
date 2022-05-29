import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { receiveAllVideos } from "services";
const initialState = {
  status: null,
  videosList: [],
};
const getVideosService = async () => {
  try {
    const {
      data: { videos: videosAvailable },
    } = await receiveAllVideos();
    return videosAvailable;
  } catch (videoSetupError) {
    console.error("ERROR OCCURED WHILE SETTING UP VIDEOS:", videoSetupError);
    return Promise.reject(videoSetupError);
  }
};

const getVideos = createAsyncThunk("videos/getVideos", getVideosService);

const videosSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {},
  extraReducers: {
    [getVideos.pending]: (state, action) => {
      state.status = "pending";
    },
    [getVideos.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.videosList = action.payload;
    },
    [getVideos.failed]: (state, action) => {
      state.status = "failed";
    },
  },
});
export { getVideos };
export default videosSlice.reducer;
