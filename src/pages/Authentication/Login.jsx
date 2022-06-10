import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authenticationLoginThunk } from "reduxFiles";
import { initialLoginData, guestLoginCredentials } from "constants";
import { useAlerts } from "hooks";
import styles from "./authentication.module.css";

const Login = () => {
  const { isUserLoggedIn } = useSelector(
    (storeReceived) => storeReceived.authenticationStore
  );
  const { showAlerts } = useAlerts();
  const [loginCredentials, setLoginCredentials] = useState(initialLoginData);
  const { email: emailInput, password: passwordInput } = loginCredentials;
  const dispatch = useDispatch();
  const setDataFromInput = (eventReceived) => {
    setLoginCredentials((prev) => ({
      ...prev,
      [eventReceived.target.name]: eventReceived.target.value,
    }));
  };
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname ?? "/explore";
  const loginFormSubmissionHandler = async (userDetailsReceived) => {
    try {
      const submissionResponse = await dispatch(
        authenticationLoginThunk(userDetailsReceived)
      );
      const { encodedToken: gatheredEncodedToken } =
        submissionResponse?.payload;
      if (submissionResponse?.error) {
        throw new Error(submissionResponse?.error);
      }
      if (gatheredEncodedToken) {
        showAlerts("success", "Logged in successfully");
        navigate(from, { replace: true });
      }
    } catch (submissionError) {
      showAlerts("error", `Login failed`);
    }
  };

  useEffect(() => {
    if (isUserLoggedIn) {
      navigate(-1);
    }
  }, [isUserLoggedIn, navigate]);

  return (
    <section className={`${styles.main_container}`}>
      <div className={`${styles.auth_wrapper} g-flex-row g-flex-center`}>
        <div className={`${styles.form_container}`}>
          <div className={`text-center`}>
            <p className={`${styles.form_heading_text}`}>LOG IN</p>
          </div>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              loginFormSubmissionHandler(loginCredentials);
              setLoginCredentials(initialLoginData);
            }}
            className={`g-flex-column ${styles.auth_form}`}
          >
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
                value={emailInput}
                onChange={(e) => {
                  setDataFromInput(e);
                }}
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
                value={passwordInput}
                onChange={(e) => {
                  setDataFromInput(e);
                }}
                placeholder="*******"
              />
            </div>
            <button
              type="submit"
              className={`py-2 px-3 ${styles.form_submit_btn}`}
            >
              LOG IN
            </button>
          </form>
          <div
            className={`${styles.form_actions} g-flex-column gentle-flex-gap g-flex-align-center`}
          >
            <p>
              <button
                onClick={() => {
                  loginFormSubmissionHandler(guestLoginCredentials);
                }}
                className={`py-2 px-3 ${styles.form_submit_btn}`}
              >
                GUEST LOGIN
              </button>
            </p>
            <p>
              <NavLink to="/signup" className={`link-none`}>
                NEW TO MI STREAM ? {"  "}{" "}
                <span className={`${styles.alternate_action}`}>JOIN NOW</span>
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
export { Login };
