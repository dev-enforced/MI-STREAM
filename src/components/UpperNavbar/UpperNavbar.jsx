import React from "react";
import { Link } from "react-router-dom";
import { useSidebar } from "context";
import { NavVideoSearch } from "components";
import styles from "./UpperNavbar.module.css";

const UpperNavbar = () => {
  const { setSidebarView } = useSidebar();
  return (
    <header className={`p-2 ${styles.miHeader}`}>
      <nav className={`p-2 g-flex-row g-flex-space-between-align-center`}>
        <button
          className={`mr-4 ${styles.iconBtn}`}
          onClick={() => {
            setSidebarView((prev) => !prev);
          }}
        >
          <i className="fas fa-bars"></i>
        </button>
        <Link className="link-none" to="/">
          <button
            className={`${styles.miBrand} fw-600 pos-relative text-cursor-pointer`}
          >
            MI STREAM
          </button>
        </Link>
        <div className={`${styles.searchDesktop}`}>
          <NavVideoSearch />
        </div>
        <div className={`g-flex-row g-flex-space-evenly g-flex-align-center`}>
          <button className={`${styles.iconBtn}`}>
            <span className={`material-icons-outlined `}>dark_mode</span>
          </button>
          <button className={`miBtn`}>LOGIN</button>
        </div>
      </nav>
      <div className={`${styles.searchForMobile}`}>
        <NavVideoSearch />
      </div>
    </header>
  );
};
export { UpperNavbar };
