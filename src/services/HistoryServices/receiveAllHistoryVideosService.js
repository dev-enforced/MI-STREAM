import axios from "axios";
const receiveAllHistoryVideosService = (tokenProvided) =>
  axios.get("/api/user/history", {
    headers: {
      authorization: tokenProvided,
    },
  });
export { receiveAllHistoryVideosService };
