import React from "react";
import styles from "./UpperNavbar.module.css";
const NavVideoSearch = () => {
  return (
    <form
      className={`${styles.miSearchSection}  g-flex-row g-flex-align-center`}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input type="text" placeholder="Search for Videos" className={`p-2`} />
      <button className={`${styles.iconBtnSm}`}>
        <i className="fas fa-times"></i>
      </button>
    </form>
  );
};

export { NavVideoSearch };
