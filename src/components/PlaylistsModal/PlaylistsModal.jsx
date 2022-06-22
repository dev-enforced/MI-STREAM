import React, { useState } from "react";
import { Modal } from "components";
import { useSelector, useDispatch } from "react-redux";
import {
  addNewVideoToPlaylist,
  createNewPlaylist,
  deleteExistingVideoFromPlaylist,
  toggleModalDisplay,
} from "reduxFiles";
import { useLocation } from "react-router-dom";
import { useAlerts } from "hooks";
import styles from "./PlaylistsModal.module.css";

const PlaylistsModal = () => {
  const { showAlerts } = useAlerts();
  const emptyPlaylistInformation = {
    title: "",
    description: "",
  };
  const [newPlaylistInformation, setNewPlaylistInformation] = useState(
    emptyPlaylistInformation
  );
  const { title: inputTitle, description: inputDescription } =
    newPlaylistInformation;
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { playlistsProvided, videoSelected: videoForPlaylist } = useSelector(
    (storeReceived) => storeReceived.playlistsStore
  );
  const { encodedTokenReceived } = useSelector(
    (storeReceived) => storeReceived.authenticationStore
  );
  const { themeProvided } = useSelector((storeReceived) => storeReceived.theme);
  const getClassName = (darkMode) => {
    if (darkMode) {
      return styles.dark;
    } else {
      return "";
    }
  };

  const generatePlaylistInformation = (changeEvent) => {
    const { name, value: valueGiven } = changeEvent.target;
    setNewPlaylistInformation((prevValue) => ({
      ...prevValue,
      [name]: valueGiven,
    }));
  };

  const createNewPlaylistEvent = () => {
    if (inputTitle === "" && inputDescription === "") {
      showAlerts("info", "Please enter all details.");
    } else {
      dispatch(
        createNewPlaylist({
          playlistDetailsGiven: newPlaylistInformation,
          tokenProvided: encodedTokenReceived,
        })
      );
      setNewPlaylistInformation(emptyPlaylistInformation);
      showAlerts("success", "Playlist created successfully");
    }
  };
  const checkVideoInPlaylist = (playlistData, selectedVideoData) =>
    playlistData.videos.some(
      (everyPlaylistVideo) => everyPlaylistVideo._id === selectedVideoData._id
    );
  const addVideoToPlaylistEvent = (
    playlistDetailsProvided,
    videoDetailsProvided
  ) => {
    if (!checkVideoInPlaylist(playlistDetailsProvided, videoDetailsProvided)) {
      dispatch(
        addNewVideoToPlaylist({
          playlistDetailsGiven: playlistDetailsProvided,
          videoToBeAdded: videoDetailsProvided,
          tokenProvided: encodedTokenReceived,
        })
      );
      showAlerts("success", "Video added to playlist");
    } else {
      showAlerts("error", "An error has come up");
    }
  };

  const deleteExistingVideoFromPlaylistEvent = (
    playlistDetailsProvided,
    videoDetailsProvided
  ) => {
    dispatch(
      deleteExistingVideoFromPlaylist({
        playlistDetailsGiven: playlistDetailsProvided,
        videoToBeDeleted: videoDetailsProvided,
        tokenProvided: encodedTokenReceived,
      })
    );
    showAlerts("success", "Video removed from playlist");
  };

  return (
    <Modal>
      <div
        className={`${
          styles.playlistModal_container
        } g-flex-column g-flex-center ${getClassName(themeProvided)}`}
        onClick={(clickEvent) => {
          clickEvent.stopPropagation();
        }}
      >
        {pathname === "/playlists" ? (
          <h5>CREATE A PLAYLIST</h5>
        ) : (
          <>
            <h5>SAVE TO A PLAYLIST</h5>
            <ul
              className={`g-flex-column ${styles.existing_playlist_collection}`}
            >
              {playlistsProvided?.map((everyPlaylist) => {
                const { _id, title: everyPlaylistTitle } = everyPlaylist;
                return (
                  <li
                    key={_id}
                    className={`g-flex-row g-flex-align-center text-cursor-pointer`}
                    onClick={() => {
                      if (
                        checkVideoInPlaylist(everyPlaylist, videoForPlaylist)
                      ) {
                        deleteExistingVideoFromPlaylistEvent(
                          everyPlaylist,
                          videoForPlaylist
                        );
                      } else {
                        addVideoToPlaylistEvent(
                          everyPlaylist,
                          videoForPlaylist
                        );
                      }
                    }}
                  >
                    <span className={`material-icons mr-4`}>
                      {checkVideoInPlaylist(everyPlaylist, videoForPlaylist)
                        ? "playlist_add_check"
                        : "playlist_add"}
                    </span>
                    <span className>{everyPlaylistTitle}</span>
                  </li>
                );
              })}
            </ul>
          </>
        )}
        <button
          className={`${styles.close_playlist_modal}`}
          onClick={() => {
            setNewPlaylistInformation(emptyPlaylistInformation);
            dispatch(toggleModalDisplay());
          }}
        >
          <span className={`material-icons`}>close</span>
        </button>
        <form
          onSubmit={(submissionEvent) => {
            submissionEvent.preventDefault();
            createNewPlaylistEvent();
          }}
          className={`g-flex-column gentle-flex-gap`}
        >
          <div className={`${styles.form_input_group}`}>
            <label
              className={`fw-500 ${styles.form_input_label}`}
              htmlFor="playlistTitle"
            >
              * Title
            </label>
            <input
              type="text"
              id="playlistTitle"
              name="title"
              placeholder="Title goes here"
              value={inputTitle}
              onChange={(changeEvent) => {
                generatePlaylistInformation(changeEvent);
              }}
              className={`${styles.form_input}`}
            />
          </div>
          <div className={`${styles.form_input_group}`}>
            <label
              className={`fw-500 ${styles.form_input_label}`}
              htmlFor="playlistDescription"
            >
              * Description
            </label>
            <input
              type="text"
              name="description"
              placeholder="Description goes here"
              value={inputDescription}
              onChange={(changeEvent) => {
                generatePlaylistInformation(changeEvent);
              }}
              id="playlistDescription"
              className={`${styles.form_input}`}
            />
          </div>
          <button className={`${styles.create_playlist_btn}`} type="submit">
            CREATE PLAYLIST
          </button>
        </form>
      </div>
    </Modal>
  );
};
export { PlaylistsModal };
