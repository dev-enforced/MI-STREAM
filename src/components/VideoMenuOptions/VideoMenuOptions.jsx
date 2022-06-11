import React, { useRef } from "react";
import { useOnClickOutside } from "hooks";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  addNewVideoToLikes,
  addNewVideoToWatchLater,
  removeExistingVideoFromLikes,
  removeExistingVideoFromWatchLater,
} from "reduxFiles";
import { useAlerts } from "hooks";
import styles from "./VideoMenuOptions.module.css";

const VideoMenuOptions = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { showAlerts } = useAlerts();
  const menuOptionsRef = useRef();
  const { selectedVideo, videoMenuOptionsView, setVideoMenuOptionsView } =
    props;
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

  const addVideoToWatchLaterEvent = (selectedVideoDetails) => {
    if (!isUserLoggedIn) {
      navigate("/login", { state: { from: location } });
      showAlerts("error", "Please Login TO Continue");
    } else {
      dispatch(
        addNewVideoToWatchLater({
          videoDetailsGiven: selectedVideoDetails,
          tokenProvided: encodedTokenReceived,
        })
      );
      showAlerts("success", "Added To Watch Later");
    }
  };
  const removeVideoFromWatchLaterEvent = (selectedVideoDetails) => {
    if (!isUserLoggedIn) {
      navigate("/login", { state: { from: location } });
      showAlerts("error", "Please Login TO Continue");
    } else {
      dispatch(
        removeExistingVideoFromWatchLater({
          videoDetailsGiven: selectedVideoDetails,
          tokenProvided: encodedTokenReceived,
        })
      );
      showAlerts("success", "Removed From Watch Later");
    }
  };
  //  [using it in the props later]

  const toggleMenuOptionsView = (event) => {
    event.stopPropagation();
    setVideoMenuOptionsView(
      (previousVideoMenuOptionsView) => !previousVideoMenuOptionsView
    );
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
                {isUserLoggedIn &&
                checkVideoPresentInWatchLater(selectedVideo) ? (
                  <li
                    className={`${styles.menuOptionsListItem} g-flex-row g-flex-align-center`}
                    onClick={(clickEvent) => {
                      clickEvent.stopPropagation();
                      removeVideoFromWatchLaterEvent(selectedVideo);
                    }}
                  >
                    <span className="material-icons">watch_later</span>
                    REMOVE FROM WATCH LATER
                  </li>
                ) : (
                  <li
                    className={`${styles.menuOptionsListItem} g-flex-row g-flex-align-center`}
                    onClick={(clickEvent) => {
                      clickEvent.stopPropagation();
                      addVideoToWatchLaterEvent(selectedVideo);
                    }}
                  >
                    <span className="material-icons-outlined">watch_later</span>
                    ADD TO WATCH LATER
                  </li>
                )}

                {checkVideoPresentInLikes(selectedVideo) && isUserLoggedIn ? (
                  <li
                    className={`${styles.menuOptionsListItem} g-flex-row g-flex-align-center`}
                    onClick={(clickEvent) => {
                      clickEvent.stopPropagation();
                      removeVideoFromLikeEvent(selectedVideo);
                    }}
                  >
                    <span className="material-icons">thumb_up</span>
                    REMOVE FROM LIKED VIDEOS
                  </li>
                ) : (
                  <li
                    className={`${styles.menuOptionsListItem} g-flex-row g-flex-align-center`}
                    onClick={(clickEvent) => {
                      clickEvent.stopPropagation();
                      addVideoToLikeEvent(selectedVideo);
                    }}
                  >
                    <span className="material-icons-outlined">thumb_up</span>
                    ADD TO LIKED VIDEOS
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
