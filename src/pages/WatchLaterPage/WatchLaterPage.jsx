import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { receiveAllWatchLaterVideos } from "reduxFiles";
import { emptyWatchLaterImage } from "constants";
import { EmptyPage } from "pages";
import { CollectionCard } from "components";
import { getVideoImg } from "utilities";
import styles from "./WatchLaterPage.module.css";

const WatchLaterPage = () => {
  const dispatch = useDispatch();
  const { watchLaterVideosList } = useSelector(
    (storeReceived) => storeReceived.watchLaterStore
  );
  const { encodedTokenReceived } = useSelector(
    (storeReceived) => storeReceived.authenticationStore
  );
  useEffect(() => {
    dispatch(receiveAllWatchLaterVideos(encodedTokenReceived));
  }, [dispatch, encodedTokenReceived]);
  return (
    <>
      {watchLaterVideosList.length === 0 ? (
        <EmptyPage
          messageToBeDisplayed={"You have not added any videos to Watch Later"}
          imageToBeDisplayed={emptyWatchLaterImage}
        />
      ) : (
        <div className={`${styles.watch_later_page}`}>
          <div
            className={`${styles.watch_later_page_title_card_container} g-flex-column`}
          >
            <div className={`${styles.watch_later_page_title_card}`}>
              <img
                className={`${styles.watch_later_page_title_card_img}`}
                src={getVideoImg(
                  watchLaterVideosList[watchLaterVideosList.length - 1]._id
                )}
                alt="Watch Later Videos"
              />
              <div
                className={`g-flex-row g-flex-center fw-500 p-4 fs-1-25 ${styles.watch_later_page_title_card_content}`}
              >
                <span className="material-icons">watch_later</span>
                <span>WATCH LATER VIDEOS</span>
              </div>
            </div>
          </div>
          <div
            className={`g-flex-column ${styles.watch_later_page_video_list}`}
          >
            {/* Liked videos list will come here */}
            {watchLaterVideosList.map((everyVideo) => {
              return (
                <CollectionCard
                  key={everyVideo._id}
                  videoDetails={everyVideo}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};
export { WatchLaterPage };
