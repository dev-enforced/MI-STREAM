import React, { useRef } from "react";
import { useOnClickOutside } from "hooks";
import styles from "./VideoMenuOptions.module.css";

const VideoMenuOptions = (props) => {
  const { selectedVideo, videoMenuOptionsView, setVideoMenuOptionsView } =
    props;
  const toggleMenuOptionsView = (event) => {
    event.stopPropagation();
    setVideoMenuOptionsView(
      (previousVideoMenuOptionsView) => !previousVideoMenuOptionsView
    );
  };
  const menuOptionsRef = useRef();
  useOnClickOutside(() => setVideoMenuOptionsView(false), menuOptionsRef);
  return (
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
            <li
              className={`${styles.menuOptionsListItem} g-flex-row g-flex-align-center`}
            >
              <span className="material-icons-outlined">watch_later</span>
              REMOVE FROM WATCH LATER
            </li>
            <li className={`${styles.menuOptionsListItem} g-flex-row g-flex-align-center`}>
              <span className="material-icons-outlined">thumb_up</span>
              ADD TO LIKED VIDEOS
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};
export { VideoMenuOptions };
