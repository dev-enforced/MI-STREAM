import React, { createContext, useContext } from "react";
const VideosContext = createContext(null);

const useVideos = () => {
  const contextReceived = useContext(VideosContext);
  if (contextReceived === undefined) {
    throw new Error("useVideos Hook must be used within Videos Provider Only");
  }
  return contextReceived;
};


const VideosProvider = ({ children }) => {
  return <VideosContext.Provider>{children}</VideosContext.Provider>;
};

export { useVideos, VideosProvider };
