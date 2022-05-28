import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sidebarLinks } from "constants";
import { updateSidebarView } from "reduxFiles";
import styles from "./Sidebar.module.css";
const SidebarMinimized = () => {
  const dispatch = useDispatch();
  const toggleSidebarView = () => {
    dispatch(updateSidebarView());
  };
  return (
    <div className={`${styles.sidebarWithIcons} g-flex-column py-4`}>
      {sidebarLinks.map(({ redirect, iconName, title }) => {
        return (
          <NavLink
            onClick={toggleSidebarView}
            key={title + iconName}
            to={redirect}
            className={`link-none ${styles.sidebarWithIconsIndividualLink} g-flex-row g-flex-align-center`}
          >
            <span className={`fs-2 material-icons-outlined`}>{iconName}</span>
          </NavLink>
        );
      })}
    </div>
  );
};
export { SidebarMinimized };
