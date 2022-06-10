import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { VideoMenuOptions } from "components";
import styles from "./CollectionCard.module.css";
import { getVideoImg, viewCountFormatter } from "utilities";
const CollectionCard = ({ videoDetails }) => {
  const navigate = useNavigate();
  const [videoMenuOptionsView, setVideoMenuOptionsView] = useState(false);
  const { _id, title, viewQuantity, dateOfUpload } = videoDetails;
  return (
    <div
      className={`${styles.collection_card_container}`}
      onClick={() => {
        navigate(`/explore/${_id}`);
      }}
    >
      <img
        src={getVideoImg(_id)}
        alt={title}
        className={`${styles.collection_card_container_img}`}
      />
      <div
        className={`g-flex-column ${styles.collection_card_container_contents}`}
      >
        <div
          className={`g-flex-row ${styles.collection_card_container_contentTitle_container}`}
        >
          <p className={`${styles.collection_card_container_contentTitle}`}>
            {title}
          </p>
        </div>
        <div className={`${styles.collection_card_container_other_contents}`}>
          <span>{viewCountFormatter(viewQuantity)}</span>
          <span
            className={`material-icons ${styles.collection_card_container_other_contents_separator}`}
          >
            fiber_manual_record
          </span>
          <span>{dateOfUpload}</span>
        </div>
      </div>
      <div className={`${styles.collection_card_container_options}`}>
        <VideoMenuOptions
          selectedVideo={videoDetails}
          videoMenuOptionsView={videoMenuOptionsView}
          setVideoMenuOptionsView={setVideoMenuOptionsView}
        />
      </div>
    </div>
  );
};
export { CollectionCard };
