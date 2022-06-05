import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginService, signupService } from "services";
const localStorageDetails = localStorage.getItem("encodedTokenReceived");
const initialState = {
  isUserLoggedIn: localStorageDetails ? true : false,
  encodedTokenReceived: localStorageDetails ? localStorageDetails : "",
};

const authenticationSignupFunction = async (userDetails) => {
  try {
    const signupResponse = await signupService(userDetails);
    const { data: dataReceived, status } = signupResponse;
    if (status === 201) {
      localStorage.setItem("encodedTokenReceived", dataReceived.encodedToken);
      return dataReceived;
    }
  } catch (signupErrorReceived) {
    console.error("ERROR OCCURRED DURING SIGNUP IMPLEMENTATION WITH REDUX");
    return Promise.error(signupErrorReceived);
  }
};

const authenticationLoginFunction = async (userDetails) => {
  try {
    const loginResponse = await loginService(userDetails);
    const { data: dataReceived, status } = loginResponse;
    if (status === 200) {
      localStorage.setItem("encodedTokenReceived", dataReceived.encodedToken);
      return dataReceived;
    }
  } catch (loginErrorReceived) {
    console.error("ERROR OCCURRED DURING SIGNUP IMPLEMENTATION WITH REDUX");
    return Promise.error(loginErrorReceived);
  }
};

const authenticationSignupThunk = createAsyncThunk(
  "authentication/signup",
  authenticationSignupFunction
);

const authenticationLoginThunk = createAsyncThunk(
  "authentication/login",
  authenticationLoginFunction
);

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    logoutService: (state) => {
      state.isUserLoggedIn = false;
      state.encodedTokenReceived = "";
      localStorage.removeItem("encodedTokenReceived");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authenticationLoginThunk.fulfilled, (state, action) => {
        state.isUserLoggedIn = action.payload.encodedToken ? true : false;
        state.encodedTokenReceived = action.payload.encodedToken
          ? action.payload.encodedToken
          : "";
      })
      .addCase(authenticationSignupThunk.fulfilled, (state, action) => {
        state.isUserLoggedIn = action.payload.encodedToken ? true : false;
        state.encodedTokenReceived = action.payload.encodedToken
          ? action.payload.encodedToken
          : "";
      });
  },
});
export const { logoutService } = authenticationSlice.actions;
export { authenticationLoginThunk, authenticationSignupThunk };
export default authenticationSlice.reducer;
