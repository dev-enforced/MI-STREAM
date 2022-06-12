import axios from "axios";
const removeVideoFromHistoryService = (videoDetailsGiven, tokenProvided) =>
  axios.delete(`/api/user/history/${videoDetailsGiven._id}`, {
    headers: {
      authorization: tokenProvided,
    },
  });
export { removeVideoFromHistoryService };
