import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CollectionCard } from "components";
import { EmptyPage } from "pages";
import styles from "./PlaylistsPage.module.css";
import { emptyPlaylistImage } from "constants";
import { receiveAllUserPlaylists } from "reduxFiles";
const PlaylistsPage = () => {
  const { encodedTokenReceived } = useSelector(
    (storeReceived) => storeReceived.authenticationStore
  );
  const { playlistsProvided } = useSelector(
    (storeReceived) => storeReceived.playlistsStore
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(receiveAllUserPlaylists(encodedTokenReceived));
  }, [dispatch, encodedTokenReceived]);
  return (
    <>
      {playlistsProvided.length === 0 ? (
        <EmptyPage
          imageToBeDisplayed={emptyPlaylistImage}
          messageToBeDisplayed={"You have not created any playlists yet"}
        />
      ) : null}
    </>
  );
};
export { PlaylistsPage };
