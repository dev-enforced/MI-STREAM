import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addVideoToLikedService,
  receiveAllLikedVideosService,
  removeVideoFromLikedService,
} from "services";
const initialState = {
  status: null,
  likedVideosList: [],
};

const receiveAllLikedVideosHandler = async (tokenProvided) => {
  try {
    const responseReceived = await receiveAllLikedVideosService(tokenProvided);
    return responseReceived;
  } catch (getLikedVideosError) {
    console.error(
      "AN ERROR OCCURED WHILE RECEIVING LIKED VIDEOS THROUGH REDUX"
    );
    return Promise.error(getLikedVideosError);
  }
};

const addNewVideoToLikesHandler = async (videoDetailsGiven, tokenProvided) => {
  try {
    const responseReceived = await addVideoToLikedService(
      videoDetailsGiven,
      tokenProvided
    );
    return responseReceived;
  } catch (addNewVideoToLikesError) {
    console.error(
      "AN ERROR OCCURED WHILE ADDING A VIDEO TO LIKES THROUGH REDUX"
    );
    return Promise.error(addNewVideoToLikesError);
  }
};

const removeExistingVideoFromLikesHandler = async (
  videoDetailsGiven,
  tokenProvided
) => {
  try {
    const responseReceived = await removeVideoFromLikedService(
      videoDetailsGiven,
      tokenProvided
    );
    return responseReceived;
  } catch (removeExistingVideoFromLikesError) {
    console.error(
      "AN ERROR OCCURED WHILE REMOVING AN EXISTING VIDEO FROM LIKES THROUGH REDUX",
      removeExistingVideoFromLikesError
    );
    return Promise.error(removeExistingVideoFromLikesError);
  }
};

const receiveAllLikedVideos = createAsyncThunk(
  "userLikes/receiveAllLikedOnes",
  receiveAllLikedVideosHandler
);
const addNewVideoToLikes = createAsyncThunk(
  "userLikes/addNewVideoToLikes",
  addNewVideoToLikesHandler
);
const removeExistingVideoFromLikes = createAsyncThunk(
  "userLikes/removeExistingVideoFromLikes",
  removeExistingVideoFromLikesHandler
);
const likesSlice = createSlice({
  name: "userLikes",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default likesSlice.reducer;
