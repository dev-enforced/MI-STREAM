import axios from "axios";
const removeVideoFromWatchLaterService = (videoDetailsGiven, tokenProvided) =>
  axios.delete(`/api/user/watchlater/${videoDetailsGiven._id}`, {
    headers: {
      authorization: tokenProvided,
    },
  });
export { removeVideoFromWatchLaterService };
