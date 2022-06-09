import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  APITester,
  Mockbee,
  Homepage,
  ExplorePage,
  Login,
  Signup,
  VideoPage,
  LikesPage,
} from "pages";
import { ProtectedRoutes } from "./ProtectedRoutes";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="/explore/:videoId" element={<VideoPage />} />
      <Route path="/mockman" element={<APITester />} />
      <Route path="/mockbee" element={<Mockbee />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/likedvideos"
        element={
          <ProtectedRoutes protectedChildren={<LikesPage />}></ProtectedRoutes>
        }
      />
    </Routes>
  );
};
export { AppRoutes };
