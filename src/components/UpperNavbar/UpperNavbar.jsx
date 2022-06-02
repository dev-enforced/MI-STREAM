import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { NavVideoSearch } from "components";
import { updateSidebarView, updateTheme } from "reduxFiles";
import styles from "./UpperNavbar.module.css";
import { getActiveLoginStyle } from "utilities";

const UpperNavbar = () => {
  const { themeProvided } = useSelector((storeReceived) => storeReceived.theme);
  const dispatch = useDispatch();
  const toggleTheme = () => {
    dispatch(updateTheme());
  };
  const toggleSidebarView = () => {
    dispatch(updateSidebarView());
  };
  const { pathname } = useLocation();
  const notAllowedSections = ["/", "/login", "/signup"];
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
        <NavLink className="link-none" to="/">
          <button
            className={`${styles.miBrand} fw-600 pos-relative text-cursor-pointer`}
          >
            MI STREAM
          </button>
        </NavLink>
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
          <NavLink
            to="/login"
            style={getActiveLoginStyle}
            className={`miBtn text-cursor-pointer link-none ${styles.login_page_active} `}
          >
            LOGIN
          </NavLink>
          {/* <button className={`miBtn text-cursor-pointer`}>LOGIN</button> */}
        </div>
      </nav>
      <div className={`${styles.searchForMobile}`}>
        <NavVideoSearch />
      </div>
    </header>
  );
};
export { UpperNavbar };
