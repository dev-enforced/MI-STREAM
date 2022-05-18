import React from "react";
import { CategoryChips, VideoCard } from "components";
import { useVideos } from "context";
import styles from "./ExplorePage.module.css";

const ExplorePage = () => {
  const { videosList } = useVideos();
  return (
    <div className={`g-flex-column gentle-flex-gap m-8`}>
      <>
        <CategoryChips />
      </>
      <section className={`${styles.video_listing} g-flex-row g-flex-wrap`}>
        {
            videosList.map((everyVideo)=>{
                return (
                    <VideoCard videoDetails={everyVideo}/>
                )
            })
        }
      </section>
    </div>
  );
};
export { ExplorePage };
