import React from "react";
import { Routes, Route } from "react-router-dom";
import { APITester, Mockbee } from "pages";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/mockman" element={<APITester />} />
      <Route path="/mockbee" element={<Mockbee />} />
    </Routes>
  );
};
export { AppRoutes };
