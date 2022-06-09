import { emptyLikeImage } from "constants";
import { EmptyPage } from "pages";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { receiveAllLikedVideos } from "reduxFiles";
// import styles from "./LikesPage.module.css";
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
  console.log(likedVideosList);
  return (
    <>
      {likedVideosList.length === 0 ? (
        <EmptyPage
          messageToBeDisplayed={"You have not liked any videos"}
          imageToBeDisplayed={emptyLikeImage}
        />
      ) : null}
    </>
  );
};
export { LikesPage };
