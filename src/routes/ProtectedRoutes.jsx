import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
const ProtectedRoutes = ({ protectedChildren }) => {
  const { isUserLoggedIn } = useSelector(
    (storeReceived) => storeReceived.authenticationStore
  );
  const location = useLocation();
  if (isUserLoggedIn) {
    return protectedChildren;
  } else {
    return <Navigate state={{ from: location }} replace to="/login" />;
  }
};
export { ProtectedRoutes };
