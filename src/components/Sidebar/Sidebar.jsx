import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useViewDimensions } from "hooks";
import { SidebarMaximized, SidebarMinimized } from "components";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const { sidebarView } = useSelector((storeReceived) => storeReceived.sidebar);
  const viewDimensions = useViewDimensions();
  const { pathname } = useLocation();
  const notAllowedSections = ["/", "/login", "/signup"];
  return (
    !notAllowedSections.includes(pathname) &&
    (sidebarView ? (
      <div className={`${styles.sidebarContainer}`}>
        <SidebarMaximized />
      </div>
    ) : (
      viewDimensions.width > 768 && (
        <div className={`${styles.sidebarContainer}`}>
          <SidebarMinimized />
        </div>
      )
    ))
  );
};
export { Sidebar };
