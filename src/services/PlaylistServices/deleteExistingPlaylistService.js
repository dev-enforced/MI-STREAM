import axios from "axios";
const deleteExistingPlaylistService = (playlistDetailsGiven, tokenProvided) =>
  axios.delete(`/api/user/playlists/${playlistDetailsGiven._id}`, {
    headers: { authorization: tokenProvided },
  });
export { deleteExistingPlaylistService };
