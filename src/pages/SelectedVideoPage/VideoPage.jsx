import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import styles from "./VideoPage.module.css";
import { VideoSuggestionCard } from "components";
import { videoShufflerFunction } from "utilities";

const VideoPage = () => {
  const { videoId } = useParams();
  const { videosList } = useSelector((storeReceived) => storeReceived.videos);
  const { sidebarView } = useSelector((storeReceived) => storeReceived.sidebar);
  const videoSelected = videosList.find(
    (everyVideo) => everyVideo._id === videoId
  );
  const { title, dateOfUpload, viewQuantity, description } = videoSelected;
  const videoPageRef = useRef();
  const [videoPageDimensions, setVideoPageDimensions] = useState();
  const getCurrentPageDimensions = () => {
    const widthReceived = videoPageRef.current.clientWidth;
    setVideoPageDimensions(widthReceived);
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
            url={`https://youtube.com/watch?v=${videoId}`}
            controls
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
              <button
                className={`${styles.selected_video_action_btn} g-flex-row g-flex-center text-cursor-pointer`}
              >
                <span
                  className={`material-icons-outlined ${styles.selected_video_action_icon}`}
                  title="Like this video"
                >
                  thumb_up
                </span>
              </button>
              <button
                className={`${styles.selected_video_action_btn} g-flex-row g-flex-center text-cursor-pointer`}
              >
                <span
                  className={`material-icons-outlined ${styles.selected_video_action_icon}`}
                  title="Watch this video later"
                >
                  watch_later
                </span>
              </button>
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
        {videoShufflerFunction(videosList)
          .slice(0, 6)
          .map((everyVideo) => {
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
