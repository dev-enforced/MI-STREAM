import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CategoryChips, VideoCard } from "components";
import { getVideos, getCategories } from "reduxFiles";
import styles from "./ExplorePage.module.css";

const ExplorePage = () => {
  const { videosList } = useSelector((storeReceived) => storeReceived.videos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVideos());
    dispatch(getCategories());
  }, [dispatch]);
  return (
    <div className={`g-flex-column gentle-flex-gap m-8`}>
      <>
        <CategoryChips />
      </>
      <section className={`${styles.video_listing} g-flex-row g-flex-wrap`}>
        {videosList?.map((everyVideo) => {
          return <VideoCard key={everyVideo?._id} videoDetails={everyVideo} />;
        })}
      </section>
    </div>
  );
};
export { ExplorePage };
