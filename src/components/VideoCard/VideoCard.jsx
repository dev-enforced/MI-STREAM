import React, { useState } from "react";
import styles from "./VideoCard.module.css";
import { getVideoImg, viewCountFormatter } from "utilities";
import { VideoMenuOptions } from "components";
const VideoCard = ({ videoDetails }) => {
  const { _id, title, viewQuantity, dateOfUpload } = videoDetails;
  const [videoMenuOptionsView, setVideoMenuOptionsView] = useState(false);
  return (
    <div className={`${styles.video_card_container}`}>
      <img
        src={getVideoImg(_id)}
        alt={title}
        className={`${styles.video_card_img}`}
      />
      <div className={`${styles.video_card_content}`}>
        <p className={`${styles.video_card_title}`}>{title}</p>
        <div className={`${styles.video_card_options_container}`}>
          {/* DROPDOWN OF OPTIONS RELATED TO CARD */}
          <VideoMenuOptions
            selectedVideo={videoDetails}
            videoMenuOptionsView={videoMenuOptionsView}
            setVideoMenuOptionsView={setVideoMenuOptionsView}
          />
        </div>
      </div>
      <div className={`${styles.video_card_more_details}`}>
        <span>{viewCountFormatter(viewQuantity)} views</span>
        <span
          className={`material-icons ${styles.video_card_content_separator}`}
        >
          fiber_manual_record
        </span>
        <span>{dateOfUpload}</span>
      </div>
    </div>
  );
};

export { VideoCard };
