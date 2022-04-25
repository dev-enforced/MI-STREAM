import React from "react";
import { useSidebar } from "context";
import { useViewDimensions } from "hooks";
import { useLocation } from "react-router-dom";
import { SidebarExpanded, SidebarContracted } from "components";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const { sidebarView } = useSidebar();
  const viewDimensions = useViewDimensions();
  const { pathname } = useLocation();
  const notAllowedSections = ["/"];
  return (
    !notAllowedSections.includes(pathname) &&
    (sidebarView ? (
      <div className={`${styles.sidebarContainer}`}>
        <SidebarExpanded />
      </div>
    ) : (
      viewDimensions.width > 768 && (
        <div className={`${styles.sidebarContainer}`}>
          <SidebarContracted />
        </div>
      )
    ))
  );
};
export { Sidebar };
