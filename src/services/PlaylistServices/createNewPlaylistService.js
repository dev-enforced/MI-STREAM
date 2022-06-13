import axios from "axios";
const createNewPlaylistService = (playlistDetailsGiven, tokenProvided) =>
  axios.post(
    "/api/user/playlists",
    { playlist: { ...playlistDetailsGiven } },
    { headers: { authorization: tokenProvided } }
  );
export { createNewPlaylistService };
