import axios from "axios";
const receiveAllLikedVideosService = (tokenProvided) => {
  return axios.get("/api/user/likes", {
    headers: {
      authorization: tokenProvided,
    },
  });
};
export { receiveAllLikedVideosService };
