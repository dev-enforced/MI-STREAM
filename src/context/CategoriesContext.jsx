import React, { createContext, useContext } from "react";
const CategoriesContext = createContext(null);

const useCategories = () => {
  const contextReceived = useContext(CategoriesContext);
  if (contextReceived === undefined) {
    throw new Error("useVideos Hook must be used within Videos Provider Only");
  }
  return contextReceived;
};

const CategoriesProvider = ({ children }) => {
  return <CategoriesContext.Provider>{children}</CategoriesContext.Provider>;
};

export { useCategories, CategoriesProvider };
