import axios from "axios";
const receiveSinglePlaylistDetailsService = (
  playlistDetailsGiven,
  tokenProvided
) =>
  axios.get(`/api/user/playlists/${playlistDetailsGiven._id}`, {
    headers: { authorization: tokenProvided },
  });

export { receiveSinglePlaylistDetailsService };
