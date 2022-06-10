import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { receiveAllLikedVideos } from "reduxFiles";
import { CollectionCard } from "components";
import { emptyLikeImage } from "constants";
import { EmptyPage } from "pages";
import { getVideoImg } from "utilities";
import styles from "./LikesPage.module.css";
const LikesPage = () => {
  const { likedVideosList } = useSelector(
    (storeReceived) => storeReceived.likesStore
  );
  const { encodedTokenReceived } = useSelector(
    (storeReceived) => storeReceived.authenticationStore
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(receiveAllLikedVideos(encodedTokenReceived));
  }, [dispatch, encodedTokenReceived]);
  return (
    <>
      {likedVideosList.length === 0 ? (
        <EmptyPage
          messageToBeDisplayed={"You have not liked any videos"}
          imageToBeDisplayed={emptyLikeImage}
        />
      ) : (
        <div className={`${styles.like_page}`}>
          <div
            className={`${styles.like_page_title_card_container} g-flex-column`}
          >
            <div className={`${styles.like_page_title_card}`}>
              <img
                className={`${styles.like_page_title_card_img}`}
                src={getVideoImg(
                  likedVideosList[likedVideosList.length - 1]._id
                )}
                alt="Liked Videos"
              />
              <div
                className={`g-flex-row g-flex-center fw-500 p-4 fs-1-25 ${styles.like_page_title_card_content}`}
              >
                <span className="material-icons">thumb_up</span>
                <span>LIKED VIDEOS</span>
              </div>
            </div>
          </div>
          <div className={`g-flex-column ${styles.like_page_video_list}`}>
            {/* Liked videos list will come here */}
            {likedVideosList.map((everyVideo) => {
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
export { LikesPage };
