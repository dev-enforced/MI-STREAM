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
      showAlerts("success", "Removed this playlist");
    } else {
      showAlerts("error", playlistOperationError);
    }
  };
  useEffect(() => {
    dispatch(receiveAllUserPlaylists(encodedTokenReceived));
  }, [dispatch, encodedTokenReceived]);
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
              YOUR PLAYLISTS
            </h6>
            <ul>
              {playlistsProvided.map((everyPlaylist) => {
                const { _id, title: playlistTitle } = everyPlaylist;
                return (
                  <li
                    key={_id}
                    className={`${styles.playlist_collection_item}`}
                  >
                    <span>{playlistTitle}</span>
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
          <div className={``}></div>
        </div>
      )}
    </>
  );
};
export { PlaylistsPage };
