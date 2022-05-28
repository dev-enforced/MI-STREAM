import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sidebarLinks } from "constants";
// import { useSidebar } from "context";
import { updateSidebarView } from "reduxFiles";
import styles from "./Sidebar.module.css";

const SidebarMaximized = () => {
  // const { setSidebarView } = useSidebar();
  const dispatch = useDispatch();
  const toggleSidebarView = () => {
    // setSidebarView((prev) => !prev);
    dispatch(updateSidebarView());
  };
  return (
    <div className={`${styles.sidebarLinksContainer} g-flex-column`}>
      <button
        className={`miBtn text-cursor-pointer ${styles.closeMenu}`}
        onClick={toggleSidebarView}
      >
        <span className="material-icons-outlined">close</span>
      </button>
      {sidebarLinks.map(({ redirect, iconName, title }) => {
        return (
          <NavLink
            onClick={toggleSidebarView}
            key={title + iconName}
            to={redirect}
            className={`link-none ${styles.sidebarLink} g-flex-row g-flex-align-center`}
          >
            <span className={`fs-2 material-icons-outlined`}>{iconName}</span>
            <span className="fs-1-5 fw-500">{title}</span>
          </NavLink>
        );
      })}
    </div>
  );
};
export { SidebarMaximized };
