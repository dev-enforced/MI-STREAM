import axios from "axios";
const addVideoToLikedService = (videoDetailsGiven, tokenProvided) => {
  return axios.post(
    "/api/user/likes",
    { video: { ...videoDetailsGiven } },
    {
      headers: {
        authorization: tokenProvided,
      },
    }
  );
};

export { addVideoToLikedService };
