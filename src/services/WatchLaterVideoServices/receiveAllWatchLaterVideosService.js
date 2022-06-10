import axios from "axios";
const receiveAllWatchLaterVideosService = (tokenProvided) =>
  axios.get("/api/user/watchlater", {
    headers: {
      authorization: tokenProvided,
    },
  });
export { receiveAllWatchLaterVideosService };
