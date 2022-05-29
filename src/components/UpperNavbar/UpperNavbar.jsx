import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { NavVideoSearch } from "components";
import { updateSidebarView, updateTheme } from "reduxFiles";
import styles from "./UpperNavbar.module.css";

const UpperNavbar = () => {
  const { themeProvided } = useSelector((storeReceived) => storeReceived.theme);
  const dispatch = useDispatch();
  const toggleTheme = () => {
    dispatch(updateTheme());
  };
  const toggleSidebarView=()=>{
    dispatch(updateSidebarView())
  }
  const { pathname } = useLocation();
  const notAllowedSections = ["/"];
  return (
    <header className={`p-2 ${styles.miHeader}`}>
      <nav className={`p-2 g-flex-row g-flex-space-between-align-center`}>
        {!notAllowedSections.includes(pathname) && (
          <button
            className={`mr-4 ${styles.iconBtn}`}
            onClick={toggleSidebarView}
          >
            <i className="fas fa-bars"></i>
          </button>
        )}
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
          <button className={`${styles.iconBtn}`} onClick={toggleTheme}>
            <span className={`material-icons-outlined `}>
              {/* darkMode */}
              {themeProvided ? "dark_mode" : "light_mode"}
            </span>
          </button>
          <button className={`miBtn text-cursor-pointer`}>LOGIN</button>
        </div>
      </nav>
      <div className={`${styles.searchForMobile}`}>
        <NavVideoSearch />
      </div>
    </header>
  );
};
export { UpperNavbar };
