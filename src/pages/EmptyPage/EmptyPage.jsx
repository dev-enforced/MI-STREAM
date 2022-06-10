import React from "react";
import { Link } from "react-router-dom";
import styles from "./EmptyPage.module.css";

const EmptyPage = ({ messageToBeDisplayed, imageToBeDisplayed }) => {
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
      </div>
    </div>
  );
};
export { EmptyPage };
