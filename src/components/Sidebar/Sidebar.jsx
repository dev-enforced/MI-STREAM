import React from "react";
import { useSidebar } from "context";
import { useWindowSize } from "hooks";
import { SidebarExpanded, SidebarContracted } from "components";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const { sidebarView } = useSidebar();
  const windowSize = useWindowSize();

  return sidebarView ? (
    <div className={`${styles.sidebarContainer}`}>
      <SidebarExpanded />
    </div>
  ) : (
    windowSize.width > 768 && (
      <div className={`${styles.sidebarContainer}`}>
        <SidebarContracted />
      </div>
    )
  );
};
export { Sidebar };
