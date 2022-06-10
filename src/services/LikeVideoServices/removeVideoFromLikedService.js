import axios from "axios";
const removeVideoFromLikedService = (videoDetailsGiven, tokenProvided) => {
  return axios.delete(`/api/user/likes/${videoDetailsGiven._id}`, {
    headers: {
      authorization: tokenProvided,
    },
  });
};
export { removeVideoFromLikedService };
