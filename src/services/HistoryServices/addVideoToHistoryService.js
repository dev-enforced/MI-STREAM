import axios from "axios";
const addVideoToHistoryService = (videoDetailsGven, tokenProvided) =>
  axios.post(
    "/api/user/history",
    {
      video: { ...videoDetailsGven },
    },
    {
      headers: {
        authorization: tokenProvided,
      },
    }
  );
export { addVideoToHistoryService };
