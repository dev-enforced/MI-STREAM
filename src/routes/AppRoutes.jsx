import React from "react";
import { Routes, Route } from "react-router-dom";
import { APITester, Mockbee, Homepage, ExplorePage } from "pages";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="/mockman" element={<APITester />} />
      <Route path="/mockbee" element={<Mockbee />} />
    </Routes>
  );
};
export { AppRoutes };
