import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { CategoryChips, VideoCard } from "components";
import { getVideos, getCategories, updateCategorySelected } from "reduxFiles";
import styles from "./ExplorePage.module.css";
import {
  sortVideosAccordingToCategoryFunction,
  videoShufflerFunction,
} from "utilities";

const ExplorePage = () => {
  const { videosList } = useSelector((storeReceived) => storeReceived.videos);
  const { categorySelected } = useSelector(
    (storeReceived) => storeReceived.category
  );
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVideos());
    dispatch(getCategories());
    return () => {
      dispatch(updateCategorySelected("All"));
    };
  }, [dispatch, location]);
  const videosListCategorySorted = sortVideosAccordingToCategoryFunction(
    videosList,
    categorySelected
  );
  const shuffledVideosList = videoShufflerFunction(videosListCategorySorted);

  return (
    <div className={`g-flex-column gentle-flex-gap m-8`}>
      <>
        <CategoryChips />
      </>
      <section className={`${styles.video_listing} g-flex-row g-flex-wrap`}>
        {shuffledVideosList?.map((everyVideo) => {
          return <VideoCard key={everyVideo?._id} videoDetails={everyVideo} />;
        })}
      </section>
    </div>
  );
};
export { ExplorePage };
