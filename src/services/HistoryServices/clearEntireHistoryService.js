import axios from "axios";
const clearEntireHistoryService = (tokenProvided) =>
  axios.delete("/api/user/history/all", {
    headers: {
      authorization: tokenProvided,
    },
  });
export { clearEntireHistoryService };
