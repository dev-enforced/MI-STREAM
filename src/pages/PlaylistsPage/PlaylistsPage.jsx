import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CollectionCard } from "components";
import { EmptyPage } from "pages";
import styles from "./PlaylistsPage.module.css";
import { emptyPlaylistImage } from "constants";
import {
  deleteExistingPlaylist,
  receiveAllUserPlaylists,
  toggleModalDisplay,
} from "reduxFiles";
import { useAlerts } from "hooks";
const PlaylistsPage = () => {
  const [playlistToBeViewedId, updatePlaylistToBeViewedId] = useState("");
  const { encodedTokenReceived } = useSelector(
    (storeReceived) => storeReceived.authenticationStore
  );
  const { playlistsProvided, error: playlistOperationError } = useSelector(
    (storeReceived) => storeReceived.playlistsStore
  );
  const dispatch = useDispatch();
  const { showAlerts } = useAlerts();
  const deleteExistingPlaylistEvent = (playlistToBeDeleted) => {
    if (!playlistOperationError) {
      dispatch(
        deleteExistingPlaylist({
          playlistDetailsGiven: playlistToBeDeleted,
          tokenProvided: encodedTokenReceived,
        })
      );
      updatePlaylistToBeViewedId("");
      showAlerts("success", "Removed this playlist");
    } else {
      showAlerts("error", playlistOperationError);
    }
  };
  useEffect(() => {
    dispatch(receiveAllUserPlaylists(encodedTokenReceived));
  }, [dispatch, encodedTokenReceived]);

  //Handling which playlist to be shown in case a playlist gets deleted which is the first playlist
  useEffect(() => {
    if (playlistsProvided !== undefined) {
      if (playlistsProvided.length !== 0 && playlistToBeViewedId === "") {
        updatePlaylistToBeViewedId(playlistsProvided[0]._id);
      }
    }
    //eslint-disable-next-line
  }, [playlistsProvided]);
  const selectedPlaylist = playlistsProvided.find(
    (everyPlaylist) => everyPlaylist._id === playlistToBeViewedId
  );
  return (
    <>
      {playlistsProvided.length === 0 ? (
        <EmptyPage
          imageToBeDisplayed={emptyPlaylistImage}
          messageToBeDisplayed={"You have not created any playlists yet"}
        />
      ) : (
        <div className={`${styles.playlist_page}`}>
          <div
            className={`${styles.playlist_collection_container} g-flex-column`}
          >
            <button
              className={`${styles.create_new_playlist_btn}`}
              onClick={() => {
                dispatch(toggleModalDisplay());
              }}
            >
              CREATE NEW PLAYLIST
              <span className="material-icons">playlist_add</span>
            </button>
            <h6 className={`${styles.playlist_collection_container_title}`}>
              YOUR PLAYLISTS ({playlistsProvided.length})
            </h6>
            <ul className={`${styles.playlist_collection}`}>
              {playlistsProvided.map((everyPlaylist) => {
                const { _id, title: playlistTitle } = everyPlaylist;
                return (
                  <li
                    key={_id}
                    className={`${styles.playlist_collection_item} py-2`}
                  >
                    <span
                      onClick={() => {
                        updatePlaylistToBeViewedId(_id);
                      }}
                      className={`${_id===playlistToBeViewedId?styles.selected_playlist:""} p-4`}
                    >
                      {playlistTitle}
                    </span>
                    <span
                      className="material-icons-outlined"
                      onClick={() => {
                        deleteExistingPlaylistEvent(everyPlaylist);
                      }}
                    >
                      delete
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={`${styles.single_playlist_details} g-flex-column`}>
            <h3 className={`my-4`}>{selectedPlaylist?.title}</h3>
            <p className={`my-4`}>{selectedPlaylist?.description}</p>
            {selectedPlaylist?.videos.length === 0 ? (
              <p className={`my-4 fw-700`}>NO Videos in this playlist</p>
            ) : (
              <div
                className={`g-flex-column ${styles.single_playlist_details}`}
              >
                {selectedPlaylist?.videos.map((everyPlaylistVideo) => {
                  return (
                    <CollectionCard
                      videoDetails={everyPlaylistVideo}
                      playlistData={selectedPlaylist}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
export { PlaylistsPage };
