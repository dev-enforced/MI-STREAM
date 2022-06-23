import axios from "axios";
const addNewVideoToPlaylistService = (
  playlistDetailsGiven,
  videoToBeAdded,
  tokenProvided
) =>
  axios.post(
    `/api/user/playlists/${playlistDetailsGiven._id}`,
    { video: { ...videoToBeAdded } },
    { headers: { authorization: tokenProvided } }
  );
export { addNewVideoToPlaylistService };
