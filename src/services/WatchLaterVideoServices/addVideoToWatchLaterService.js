import axios from "axios";
const addVideoToWatchLaterService = (videoDetailsGiven, tokenProvided) =>
  axios.post(
    "/api/user/watchlater",
    { video: { ...videoDetailsGiven } },
    {
      headers: {
        authorization: tokenProvided,
      },
    }
  );
export { addVideoToWatchLaterService };
