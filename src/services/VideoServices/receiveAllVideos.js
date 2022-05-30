import axios from "axios";
const receiveAllVideos = async () => {
  try {
    const videosResponse = await axios.get("/api/videos");
    return videosResponse;
  } catch (videosResponseError) {
    console.error("ERROR OCCURED WHILE RECEIVING VIDEOS FROM API CALL");
  }
};
export { receiveAllVideos };
