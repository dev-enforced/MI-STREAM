import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  APITester,
  Mockbee,
  Homepage,
  ExplorePage,
  Login,
  Signup,
} from "pages";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="/mockman" element={<APITester />} />
      <Route path="/mockbee" element={<Mockbee />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};
export { AppRoutes };
