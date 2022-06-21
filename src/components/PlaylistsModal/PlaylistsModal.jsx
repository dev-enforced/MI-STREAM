import React, { useState } from "react";
import { Modal } from "components";
import { useSelector, useDispatch } from "react-redux";
import { createNewPlaylist, toggleModalDisplay } from "reduxFiles";
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
  const { playlistsProvided, error: playlistOperationError } = useSelector(
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
