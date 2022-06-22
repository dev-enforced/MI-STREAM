import React, { useRef } from "react";
import { useOnClickOutside } from "hooks";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  addNewVideoToLikes,
  addNewVideoToWatchLater,
  deleteExistingVideoFromPlaylist,
  removeExistingVideoFromHistory,
  removeExistingVideoFromLikes,
  removeExistingVideoFromWatchLater,
  toggleModalDisplay,
  updateVideoSelected,
} from "reduxFiles";
import { useAlerts } from "hooks";
import styles from "./VideoMenuOptions.module.css";

const VideoMenuOptions = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const { showAlerts } = useAlerts();
  const menuOptionsRef = useRef();
  const {
    selectedVideo,
    videoMenuOptionsView,
    setVideoMenuOptionsView,
    playlistData,
  } = props;
  const { isUserLoggedIn, encodedTokenReceived } = useSelector(
    (storeReceived) => storeReceived.authenticationStore
  );
  const { likedVideosList } = useSelector(
    (storeReceived) => storeReceived.likesStore
  );
  const { watchLaterVideosList } = useSelector(
    (storeReceived) => storeReceived.watchLaterStore
  );

  const checkVideoPresentInLikes = (selectedVideoDetails) =>
    likedVideosList.some(
      (everyVideo) => everyVideo._id === selectedVideoDetails._id
    );
  const checkVideoPresentInWatchLater = (selectedVideoDetails) => {
    return watchLaterVideosList.some(
      (everyVideo) => everyVideo._id === selectedVideoDetails._id
    );
  };

  const addVideoToLikeEvent = (selectedVideoDetails) => {
    if (!isUserLoggedIn) {
      navigate("/login", { state: { from: location } });
      showAlerts("error", "Please Login TO Continue");
    } else {
      dispatch(
        addNewVideoToLikes({
          videoDetailsGiven: selectedVideoDetails,
          tokenProvided: encodedTokenReceived,
        })
      );
      showAlerts("success", "Added To Likes");
    }
  };
  const removeVideoFromLikeEvent = (selectedVideoDetails) => {
    if (!isUserLoggedIn) {
      navigate("/login");
      showAlerts("error", "Please Login TO Continue");
    } else {
      dispatch(
        removeExistingVideoFromLikes({
          videoDetailsGiven: selectedVideoDetails,
          tokenProvided: encodedTokenReceived,
        })
      );
      showAlerts("success", "Removed From Likes");
    }
  };

  const addVideoToWatchLaterEvent = async (selectedVideoDetails) => {
    if (!isUserLoggedIn) {
      navigate("/login", { state: { from: location } });
      showAlerts("error", "Please Login TO Continue");
    } else {
      try {
        const submissionResponse = await dispatch(
          addNewVideoToWatchLater({
            videoDetailsGiven: selectedVideoDetails,
            tokenProvided: encodedTokenReceived,
          })
        );
        if (submissionResponse?.error) {
          throw new Error(submissionResponse?.error);
        }
        if (submissionResponse?.payload) {
          showAlerts("success", "Added To Watch Later");
        }
      } catch (submissionResponseError) {
        showAlerts(
          "error",
          "ERROR OCCURED IN ADDING THIS VIDEO TO WATCH LATER"
        );
      }
    }
  };
  const removeVideoFromWatchLaterEvent = async (selectedVideoDetails) => {
    if (!isUserLoggedIn) {
      navigate("/login", { state: { from: location } });
      showAlerts("error", "Please Login TO Continue");
    } else {
      try {
        const submissionResponse = await dispatch(
          removeExistingVideoFromWatchLater({
            videoDetailsGiven: selectedVideoDetails,
            tokenProvided: encodedTokenReceived,
          })
        );
        if (submissionResponse?.error) {
          throw new Error(submissionResponse?.error);
        }
        if (submissionResponse?.payload) {
          showAlerts("success", "Removed From Watch Later");
        }
      } catch (submissionResponseError) {
        showAlerts(
          "error",
          "AN ERROR OCCURED IN REMOVING THIS VIDEO FROM WATCH LATER"
        );
      }
    }
  };

  const removeVideoFromHistoryEvent = async (selectedVideoDetails) => {
    if (!isUserLoggedIn) {
      navigate("/login", { state: { from: location } });
      showAlerts("error", "Please Login TO Continue");
    } else {
      try {
        const eventResponse = await dispatch(
          removeExistingVideoFromHistory({
            videoDetailsGiven: selectedVideoDetails,
            tokenProvided: encodedTokenReceived,
          })
        );
        if (eventResponse?.error) {
          throw new Error(eventResponse.error);
        }
        if (eventResponse?.payload) {
          showAlerts("success", "Video Removed From History");
        }
      } catch (removeVideoFromHistoryEventError) {
        showAlerts("error", "Error in removing Video  From History");
      }
    }
  };
  //  [using it in the props later]

  const toggleMenuOptionsView = (event) => {
    event.stopPropagation();
    setVideoMenuOptionsView(
      (previousVideoMenuOptionsView) => !previousVideoMenuOptionsView
    );
    dispatch(updateVideoSelected(selectedVideo));
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

  useOnClickOutside(() => setVideoMenuOptionsView(false), menuOptionsRef);
  return (
    <>
      {isUserLoggedIn ? (
        <div ref={menuOptionsRef} className={`relative-position`}>
          <button
            className={`${styles.video_menu_btn} g-flex-row g-flex-center`}
            onClick={toggleMenuOptionsView}
          >
            <span className="material-icons">more_vert</span>
          </button>
          {videoMenuOptionsView ? (
            <div className={`${styles.menuOptionsContainer}`}>
              <ul className={`${styles.menuOptionsList} g-flex-column`}>
                {
                  <li
                    className={`${styles.menuOptionsListItem} g-flex-row g-flex-align-center`}
                    onClick={(clickEvent) => {
                      clickEvent.stopPropagation();
                      isUserLoggedIn &&
                      checkVideoPresentInWatchLater(selectedVideo)
                        ? removeVideoFromWatchLaterEvent(selectedVideo)
                        : addVideoToWatchLaterEvent(selectedVideo);
                    }}
                  >
                    <span
                      className={
                        isUserLoggedIn &&
                        checkVideoPresentInWatchLater(selectedVideo)
                          ? "material-icons"
                          : "material-icons-outlined"
                      }
                    >
                      watch_later
                    </span>
                    {isUserLoggedIn &&
                    checkVideoPresentInWatchLater(selectedVideo)
                      ? "REMOVE FROM WATCH LATER"
                      : "ADD TO WATCH LATER"}
                  </li>
                }
                {
                  <li
                    className={`${styles.menuOptionsListItem} g-flex-row g-flex-align-center`}
                    onClick={(clickEvent) => {
                      clickEvent.stopPropagation();
                      checkVideoPresentInLikes(selectedVideo) && isUserLoggedIn
                        ? removeVideoFromLikeEvent(selectedVideo)
                        : addVideoToLikeEvent(selectedVideo);
                    }}
                  >
                    <span
                      className={
                        checkVideoPresentInLikes(selectedVideo) &&
                        isUserLoggedIn
                          ? "material-icons"
                          : "material-icons-outlined"
                      }
                    >
                      thumb_up
                    </span>
                    {checkVideoPresentInLikes(selectedVideo) && isUserLoggedIn
                      ? "REMOVE FROM FAVOURITES"
                      : "ADD TO FAVOURITES"}
                  </li>
                }
                {pathname !== "/playlists" && (
                  <li
                    className={`${styles.menuOptionsListItem} g-flex-row g-flex-align-center`}
                    onClick={(clickEvent) => {
                      clickEvent.stopPropagation();
                      dispatch(toggleModalDisplay());
                    }}
                  >
                    <span className="material-icons">playlist_add</span>
                    SAVE TO PLAYLIST
                  </li>
                )}
                {pathname === "/history" && (
                  <li
                    className={`${styles.menuOptionsListItem} g-flex-row g-flex-align-center`}
                    onClick={(clickEvent) => {
                      clickEvent.stopPropagation();
                      removeVideoFromHistoryEvent(selectedVideo);
                    }}
                  >
                    <span className="material-icons-outlined">delete</span>
                    Remove From History
                  </li>
                )}
                {pathname === "/playlists" && (
                  <li
                    className={`${styles.menuOptionsListItem} g-flex-row g-flex-align-center`}
                    onClick={(clickEvent) => {
                      clickEvent.stopPropagation();
                      deleteExistingVideoFromPlaylistEvent(
                        playlistData,
                        selectedVideo
                      );
                    }}
                  >
                    <span className="material-icons-outlined">delete</span>
                    Remove From Playlist
                  </li>
                )}
              </ul>
            </div>
          ) : null}
        </div>
      ) : null}
    </>
  );
};
export { VideoMenuOptions };
