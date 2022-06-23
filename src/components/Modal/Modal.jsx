import { createPortal } from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleModalDisplay } from "reduxFiles";

import styles from "./Modal.module.css";

const Modal = ({ children }) => {
  const { modalDisplay } = useSelector(
    (storeReceived) => storeReceived.modalDisplayStore
  );
  const dispatch = useDispatch();
  if (!modalDisplay) return null;
  return createPortal(
    <div
      className={`${styles.modal_container} g-flex-row g-flex-center`}
      onClick={() => {
        dispatch(toggleModalDisplay());
      }}
    >
      {children}
    </div>,
    document.getElementById("modal-root")
  );
};
export { Modal };
