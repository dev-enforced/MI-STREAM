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
    const {
      data: { likes: likedVideosListReceived },
    } = await receiveAllLikedVideosService(tokenProvided);
    console.log(likedVideosListReceived);
    return likedVideosListReceived;
  } catch (getLikedVideosError) {
    console.error(
      "AN ERROR OCCURED WHILE RECEIVING LIKED VIDEOS THROUGH REDUX"
    );
    return Promise.error(getLikedVideosError);
  }
};

const addNewVideoToLikesHandler = async (videoDetailsGiven, tokenProvided) => {
  try {
    const {
      data: { likes: likedVideosListReceived },
    } = await addVideoToLikedService(videoDetailsGiven, tokenProvided);
    console.log(likedVideosListReceived);
    return likedVideosListReceived;
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
    const {
      data: { likes: likedVideosListReceived },
    } = await removeVideoFromLikedService(videoDetailsGiven, tokenProvided);
    console.log(likedVideosListReceived);
    return likedVideosListReceived;
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
  extraReducers: (builder) => {
    builder
      .addCase(receiveAllLikedVideos.fulfilled, (state, action) => {
        console.log(action.payload);
        state.status = "fulfilled";
        state.likedVideosList = action.payload;
      })
      .addCase(addNewVideoToLikes.fulfilled, (state, action) => {
        console.log(action.payload);
        state.status = "fulfilled";
        state.likedVideosList = action.payload;
      })
      .addCase(removeExistingVideoFromLikes.fulfilled, (state, action) => {
        console.log(action.payload);
        state.status = "fulfilled";
        state.likedVideosList = action.payload;
      });
  },
});

export default likesSlice.reducer;
