import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { EmptyPage } from "pages";
import { CollectionCard } from "components";
import { emptyHistoryImage } from "constants";
import { receiveAllHistoryVideos, clearEntireHistory } from "reduxFiles";
import styles from "./HistoryPage.module.css";
import { getVideoImg } from "utilities";
import { useAlerts } from "hooks";

const HistoryPage = () => {
  const dispatch = useDispatch();
  const { status, historyVideosList } = useSelector(
    (storeReceived) => storeReceived.historyStore
  );
  const { encodedTokenReceived } = useSelector(
    (storeReceived) => storeReceived.authenticationStore
  );
  const { showAlerts } = useAlerts();
  useEffect(() => {
    dispatch(receiveAllHistoryVideos(encodedTokenReceived));
  }, [dispatch, encodedTokenReceived]);
  return (
    <>
      {status === "loading" ? (
        <h1>Fetching the videos of History....</h1>
      ) : (
        <>
          {historyVideosList.length === 0 ? (
            <EmptyPage
              messageToBeDisplayed={"You have not watched any videos yet"}
              imageToBeDisplayed={emptyHistoryImage}
            />
          ) : (
            <div className={`${styles.history_page}`}>
              <div
                className={`${styles.history_page_title_card_container} g-flex-column`}
              >
                <div className={`${styles.history_page_title_card}`}>
                  <img
                    className={`${styles.history_page_title_card_img}`}
                    src={getVideoImg(
                      historyVideosList[historyVideosList.length - 1]._id
                    )}
                    alt="Watch Later Videos"
                  />
                  <div
                    className={`g-flex-row g-flex-center fw-500 p-4 fs-1-25 ${styles.history_page_title_card_content}`}
                  >
                    <span className="material-icons">history</span>
                    <span>HISTORY</span>
                  </div>
                </div>
                <button
                  className={`${styles.history_page_clear_all}`}
                  onClick={() => {
                    dispatch(clearEntireHistory(encodedTokenReceived));
                    showAlerts("success", "Cleared the whole history");
                  }}
                >
                  Clear All
                </button>
              </div>

              <div
                className={`g-flex-column ${styles.history_page_video_list}`}
              >
                {/* Liked videos list will come here */}
                {historyVideosList.map((everyVideo) => {
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
      )}
    </>
  );
};
export { HistoryPage };
