import React from "react";
import { Link } from "react-router-dom";
import styles from "./UpperNavbar.module.css";

const UpperNavbar = () => {
  return (
    <header className={`p-2 ${styles.miHeader}`}>
      <nav className={`p-2 g-flex-row g-flex-space-between-align-center`}>
        <button className={`mr-4 ${styles.iconBtn} ${styles.showMenuBtn}`}>
          <i className="fas fa-bars"></i>
        </button>
        <Link className="link-none" to="/">
          <button
            className={`${styles.miBrand} fw-600 pos-relative text-cursor-pointer`}
          >
            MI STREAM
          </button>
        </Link>
        <form
          className={`${styles.miSearchSection} ${styles.searchDesktop} g-flex-row g-flex-align-center`}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            placeholder="Search for Videos"
            className={`p-2`}
          />
          <button className={`${styles.iconBtnSm}`}>
            <i className="fas fa-times"></i>
          </button>
        </form>
        <div className={`g-flex-row g-flex-space-evenly g-flex-align-center`}>
          <button className={`${styles.iconBtn}`}>
            <span className={`material-icons-outlined `}>dark_mode</span>
          </button>
          <button className="btn">LOGIN</button>
        </div>
      </nav>
      <div className={`${styles.searchForMobile}`}>
        <form
          className={`${styles.miSearchSection} g-flex-row g-flex-align-center`}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            placeholder="Search for Videos"
            className={`p-2`}
          />
          <button className={`${styles.iconBtnSm}`}>
            <i className="fas fa-times"></i>
          </button>
        </form>
      </div>
    </header>
  );
};
export { UpperNavbar };
