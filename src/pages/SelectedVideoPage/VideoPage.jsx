import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import { VideoSuggestionCard } from "components";
import { getVideoUrl } from "utilities";
import {
  addNewVideoToLikes,
  addNewVideoToWatchLater,
  removeExistingVideoFromLikes,
  removeExistingVideoFromWatchLater,
  addNewVideoToHistory,
  removeExistingVideoFromHistory,
} from "reduxFiles";
import { useAlerts } from "hooks";
import styles from "./VideoPage.module.css";
const VideoPage = () => {
  const { videoId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const videoPageRef = useRef();
  const location = useLocation();
  const { showAlerts } = useAlerts();
  const [videoPageDimensions, setVideoPageDimensions] = useState();
  const { videosList } = useSelector((storeReceived) => storeReceived.videos);
  const { sidebarView } = useSelector((storeReceived) => storeReceived.sidebar);
  const { isUserLoggedIn, encodedTokenReceived } = useSelector(
    (storeReceived) => storeReceived.authenticationStore
  );
  const { likedVideosList } = useSelector(
    (storeReceived) => storeReceived.likesStore
  );
  const { watchLaterVideosList, status: watchLaterStatus } = useSelector(
    (storeReceived) => storeReceived.watchLaterStore
  );
  const { historyVideosList } = useSelector(
    (storeReceived) => storeReceived.historyStore
  );
  const videoSelected = videosList.find(
    (everyVideo) => everyVideo._id === videoId
  );
  const { title, dateOfUpload, viewQuantity, description } = videoSelected;

  const getCurrentPageDimensions = () => {
    const widthReceived = videoPageRef.current.clientWidth;
    setVideoPageDimensions(widthReceived);
  };

  const checkVideoPresentInLikes = (selectedVideoDetails) =>
    likedVideosList.some(
      (everyVideo) => everyVideo._id === selectedVideoDetails._id
    );
  const checkVideoPresentInWatchLater = (selectedVideoDetails) => {
    return watchLaterVideosList.some(
      (everyVideo) => everyVideo._id === selectedVideoDetails._id
    );
  };
  const checkVideoPresentInHistory = (selectedVideoDetails) =>
    historyVideosList.some(
      (everyVideo) => everyVideo._id === selectedVideoDetails._id
    );
  const addNewVideoToHistoryEvent = (selectedVideoDetails) => {
    if (checkVideoPresentInHistory(selectedVideoDetails)) {
      dispatch(
        removeExistingVideoFromHistory({
          videoDetailsGiven: selectedVideoDetails,
          tokenProvided: encodedTokenReceived,
        })
      );
    }
    dispatch(
      addNewVideoToHistory({
        videoDetailsGiven: selectedVideoDetails,
        tokenProvided: encodedTokenReceived,
      })
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
  //   For receiving the page width whenever the window is resized and setting it
  useEffect(() => {
    getCurrentPageDimensions();
  }, [videosList, sidebarView]);
  useEffect(() => {
    window.addEventListener("resize", getCurrentPageDimensions);
  }, []);
  return (
    <div
      ref={videoPageRef}
      className={`${styles.video_page_container}`}
      style={{ flexDirection: videoPageDimensions < 1165 ? "column" : "row" }}
    >
      {/* Main selected video content would be displayed here */}
      <div
        className={`${styles.selected_video_section} g-flex-column`}
        style={{
          alignSelf: videoPageDimensions < 1165 && "stretch",
        }}
      >
        <div className={`${styles.selected_video_player}`}>
          <ReactPlayer
            width="100%"
            height="100%"
            url={`${getVideoUrl(videoId)}`}
            controls
            playing
            onStart={() => {
              addNewVideoToHistoryEvent(videoSelected);
            }}
          />
        </div>
        <div className={`${styles.selected_video_contents} g-flex-column`}>
          <h1 className={`${styles.selected_video_contents_title}`}>{title}</h1>
          <div className={`g-flex-row g-flex-align-center g-flex-wrap`}>
            <div
              className={`g-flex-row g-flex-align-center ${styles.selected_videos_sub_content}`}
            >
              <span>{viewQuantity} views</span>
              <span
                className={`material-icons ${styles.selected_video_contents_separator}`}
              >
                fiber_manual_record
              </span>
              <span>{dateOfUpload}</span>
            </div>
            <div
              className={`g-flex-row g-flex-center ${styles.selected_video_actions}`}
            >
              {
                <button
                  className={`${styles.selected_video_action_btn} g-flex-row g-flex-center text-cursor-pointer`}
                  onClick={() => {
                    checkVideoPresentInLikes(videoSelected) && isUserLoggedIn
                      ? removeVideoFromLikeEvent(videoSelected)
                      : addVideoToLikeEvent(videoSelected);
                  }}
                >
                  <span
                    className={`${
                      checkVideoPresentInLikes(videoSelected) && isUserLoggedIn
                        ? "material-icons"
                        : "material-icons-outlined"
                    } ${styles.selected_video_action_icon}`}
                    title={
                      checkVideoPresentInLikes(videoSelected) && isUserLoggedIn
                        ? "Remove this video from likes"
                        : "Add This Video To Likes"
                    }
                  >
                    thumb_up
                  </span>
                </button>
              }
              {
                <button
                  className={`${styles.selected_video_action_btn} g-flex-row g-flex-center text-cursor-pointer`}
                  disabled={watchLaterStatus === "pending"}
                  onClick={() => {
                    checkVideoPresentInWatchLater(videoSelected) &&
                    isUserLoggedIn
                      ? removeVideoFromWatchLaterEvent(videoSelected)
                      : addVideoToWatchLaterEvent(videoSelected);
                  }}
                >
                  <span
                    className={`${
                      checkVideoPresentInWatchLater(videoSelected) &&
                      isUserLoggedIn
                        ? "material-icons"
                        : "material-icons-outlined"
                    } ${styles.selected_video_action_icon}`}
                    title={
                      checkVideoPresentInWatchLater(videoSelected) &&
                      isUserLoggedIn
                        ? "Remove this video from watch later"
                        : "Add This Video To Watch Later"
                    }
                  >
                    watch_later
                  </span>
                </button>
              }

              <button
                className={`${styles.selected_video_action_btn} g-flex-row g-flex-center text-cursor-pointer`}
              >
                <span
                  className={`material-icons-outlined ${styles.selected_video_action_icon}`}
                  title="Add this video to a playlist"
                >
                  playlist_add
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className={`${styles.selected_video_line}`}></div>
        <div className={`${styles.selected_video_description}`}>
          {description}
        </div>
      </div>

      <div className={`g-flex-column ${styles.video_suggestions}`}>
        {videosList.slice(0, 6).map((everyVideo) => {
          if (everyVideo._id !== videoId) {
            return (
              <VideoSuggestionCard
                key={everyVideo._id}
                videoReceived={everyVideo}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};
export { VideoPage };
