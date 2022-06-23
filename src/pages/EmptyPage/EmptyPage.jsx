import React from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { toggleModalDisplay } from "reduxFiles";
import styles from "./EmptyPage.module.css";
const EmptyPage = ({ messageToBeDisplayed, imageToBeDisplayed }) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  return (
    <div
      className={`${styles.empty_collection_container} g-flex-row g-flex-center`}
    >
      <div
        className={`${styles.empty_collection_contents} g-flex-column g-flex-align-center`}
      >
        <h2 className={`${styles.empty_collection_contents_title}`}>
          {messageToBeDisplayed}
        </h2>
        <img
          className={`${styles.empty_collection_content_image}`}
          src={imageToBeDisplayed}
          alt="There are no videos here"
        />
        <Link className={`link-none ${styles.explore_more_btn}`} to="/explore">
          EXPLORE MORE
        </Link>
        {pathname === "/playlists" && (
          <button
            className={`link-none ${styles.explore_more_btn}`}
            onClick={() => {
              dispatch(toggleModalDisplay());
            }}
          >
            CREATE PLAYLIST
          </button>
        )}
      </div>
    </div>
  );
};
export { EmptyPage };
