import axios from "axios";
const receiveAllUserPlaylistsService = (tokenProvided) =>
  axios.get("/api/user/playlists", {
    headers: {
      authorization: tokenProvided,
    },
  });
export { receiveAllUserPlaylistsService };
