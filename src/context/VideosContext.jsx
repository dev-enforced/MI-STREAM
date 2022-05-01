import React, { createContext, useContext, useState, useEffect } from "react";
import { receiveAllVideos } from "services";
const VideosContext = createContext(null);

const useVideos = () => {
  const contextReceived = useContext(VideosContext);
  if (contextReceived === undefined) {
    throw new Error("useVideos Hook must be used within Videos Provider Only");
  }
  return contextReceived;
};

const VideosProvider = ({ children }) => {
  const [videosList, setVideosList] = useState([]);
  const getVideos = async () => {
    try {
      const {
        data: { videos: videosAvailable },
      } = await receiveAllVideos();
      setVideosList(videosAvailable);
    } catch (videoSetupError) {
      console.error("ERROR OCCURED WHILE SETTING UP VIDEOS:", videoSetupError);
    }
  };
  useEffect(() => {
    getVideos();
  }, []);
  return (
    <VideosContext.Provider value={{ videosList, setVideosList }}>
      {children}
    </VideosContext.Provider>
  );
};

export { useVideos, VideosProvider };
