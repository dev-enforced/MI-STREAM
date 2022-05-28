import React from "react";
// import { useSidebar } from "context";
import { useViewDimensions } from "hooks";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { SidebarMaximized, SidebarMinimized } from "components";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  // const { sidebarView } = useSidebar();
  const { sidebarView } = useSelector((storeReceived) => storeReceived.sidebar);
  const viewDimensions = useViewDimensions();
  const { pathname } = useLocation();
  const notAllowedSections = ["/"];
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
