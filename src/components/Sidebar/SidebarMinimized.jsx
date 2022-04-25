import React from "react";
import { NavLink } from "react-router-dom";
import { sidebarLinks } from "constants";
import { useSidebar } from "context";
import styles from "./Sidebar.module.css";

const SidebarMinimized = () => {
  const { setSidebarView } = useSidebar();
  const toggleSidebarView = () => {
    setSidebarView((prev) => !prev);
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
