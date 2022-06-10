import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { viewCountFormatter, getVideoImg } from "utilities";
import { VideoMenuOptions } from "components";
import styles from "./VideoSuggestionCard.module.css";
const VideoSuggestionCard = ({ videoReceived }) => {
  const navigate = useNavigate();
  const [videoMenuOptionsView, setVideoMenuOptionsView] = useState(false);
  const { _id, title, viewQuantity, dateOfUpload } = videoReceived;
  return (
    <div
      className={`${styles.video_suggestion_card_container} g-flex-row text-cursor-pointer`}
      onClick={() => {
        navigate(`/explore/${_id}`);
      }}
    >
      <img
        src={getVideoImg(_id)}
        alt={title}
        className={`${styles.video_suggestion_img}`}
      />
      <div className={`${styles.video_suggestion_card_contents} g-flex-column`}>
        <div className={`g-flex-row`}>
          <p className={`${styles.video_suggestion_card_title}`}>{title}</p>
          {/* <span
            className={`material-icons g-flex-center ${styles.video_suggestion_card_more_options}`}
          >
            more_vert
          </span> */}
          <div className={`${styles.video_suggestion_card_options_container}`}>
            <VideoMenuOptions
              selectedVideo={videoReceived}
              videoMenuOptionsView={videoMenuOptionsView}
              setVideoMenuOptionsView={setVideoMenuOptionsView}
            />
          </div>
        </div>
        <div
          className={`g-flex-row g-flex-wrap g-flex-align-center ${styles.video_suggestion_card_more_details}`}
        >
          <span>{viewCountFormatter(viewQuantity)} views</span>
          <span
            className={`material-icons ${styles.video_suggestion_card_separator}`}
          >
            fiber_manual_record
          </span>
          <span>{dateOfUpload}</span>
        </div>
      </div>
    </div>
  );
};
export { VideoSuggestionCard };
