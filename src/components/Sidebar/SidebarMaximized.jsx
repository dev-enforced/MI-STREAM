import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sidebarLinks } from "constants";
import { closeSidebarView, openSidebarView } from "reduxFiles";
import { getActiveSideLinkStyle } from "utilities";
import styles from "./Sidebar.module.css";
const SidebarMaximized = () => {
  const dispatch = useDispatch();
  const toggleSidebarView = () => {
    dispatch(openSidebarView());
  };
  const closeSidebar=()=>{
    dispatch(closeSidebarView());
  }

  return (
    <div className={`${styles.sidebarLinksContainer} g-flex-column`}>
      <button
        className={`miBtn text-cursor-pointer ${styles.closeMenu}`}
        onClick={closeSidebar}
      >
        <span className="material-icons-outlined">close</span>
      </button>
      {sidebarLinks.map(({ redirect, iconName, title }) => {
        return (
          <NavLink
            onClick={toggleSidebarView}
            key={title + iconName}
            to={redirect}
            style={getActiveSideLinkStyle}
            className={`link-none ${styles.sidebarLink} g-flex-row g-flex-align-center `}
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
