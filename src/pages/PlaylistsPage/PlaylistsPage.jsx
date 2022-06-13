import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CollectionCard } from "components";
import { EmptyPage } from "pages";
import styles from "./PlaylistsPage.module.css";
const PlaylistsPage = () => {
  const { encodedTokenReceived } = useSelector(
    (storeReceived) => storeReceived.authenticationStore
  );
  const dispatch = useDispatch();
  return <></>;
};
export { PlaylistsPage };
