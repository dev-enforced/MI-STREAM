import axios from "axios";
const deleteExistingVideoFromPlaylistService = (
  playlistDetailsGiven,
  videoToBeDeleted,
  tokenProvided
) =>
  axios.delete(
    `/api/user/playlists/${playlistDetailsGiven._id}/${videoToBeDeleted._id}`,
    { headers: { authorization: tokenProvided } }
  );
export { deleteExistingVideoFromPlaylistService };
