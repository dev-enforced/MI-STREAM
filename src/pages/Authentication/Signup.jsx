import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./authentication.module.css";
const Signup = () => {
  return (
    <section className={`${styles.main_container}`}>
      <div className={`${styles.auth_wrapper} g-flex-row g-flex-center`}>
        <div className={`${styles.form_container}`}>
          <div className={`text-center`}>
            <p className={`${styles.form_heading_text}`}>SIGN UP</p>
          </div>
          <form className={`g-flex-column ${styles.auth_form}`}>
            <div className={`${styles.form_input_container}`}>
              <label
                htmlFor="firstNameGiven"
                className={`${styles.form_input_label}`}
              >
                First Name
              </label>
              <input
                type="text"
                id="firstNameGiven"
                name="firstName"
                className={`${styles.auth_input}`}
                placeholder="Krish"
              />
            </div>
            <div className={`${styles.form_input_container}`}>
              <label
                htmlFor="lastNameGiven"
                className={`${styles.form_input_label}`}
              >
                First Name
              </label>
              <input
                type="text"
                id="lastNameGiven"
                name="lastName"
                className={`${styles.auth_input}`}
                placeholder="Patel"
              />
            </div>
            <div className={`${styles.form_input_container}`}>
              <label
                htmlFor="emailGiven"
                className={`${styles.form_input_label}`}
              >
                Email Address
              </label>
              <input
                type="email"
                id="emailGiven"
                name="email"
                className={`${styles.auth_input}`}
                placeholder="krishpatel@gmail.com"
              />
            </div>
            <div className={`${styles.form_input_container}`}>
              <label
                htmlFor="passwordGiven"
                className={`${styles.form_input_label}`}
              >
                Password
              </label>
              <input
                type="password"
                id="passwordGiven"
                name="password"
                className={`${styles.auth_input}`}
                placeholder="*******"
              />
            </div>
            <button className={`py-2 px-3 ${styles.form_submit_btn}`}>
              SIGN UP
            </button>
          </form>
          <div
            className={`${styles.form_actions} g-flex-column gentle-flex-gap g-flex-align-center`}
          >
            <p>
              <NavLink to="/login" className={`link-none`}>
                ALREADY ON MI-STREAM ? {"  "}
                <span className={`${styles.alternate_action}`}>LOGIN</span>
              </NavLink>
            </p>
            <p>
              <NavLink to="/explore" className={`link-none`}>
                <span className={`${styles.alternate_action}`}>
                  EXPLORE MORE
                </span>
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Signup };
