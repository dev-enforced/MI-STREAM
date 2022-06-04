import { initialSignupData } from "constants";
import React, { useState,useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { authenticationSignupThunk } from "reduxFiles";
import styles from "./authentication.module.css";
const Signup = () => {
  const { isUserLoggedIn } = useSelector(
    (storeReceived) => storeReceived.authenticationStore
  );
  const dispatch = useDispatch();
  const [signupCredentials, setSignupCredentials] = useState(initialSignupData);
  const {
    firstName: inputFirstName,
    lastName: inputLastName,
    email: inputEmail,
    password: inputPassword,
  } = signupCredentials;
  const setDataFromInput = (eventReceived) => {
    setSignupCredentials((prev) => ({
      ...prev,
      [eventReceived.target.name]: eventReceived.target.value,
    }));
  };
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname ?? "/explore";
  const signupFormSubmissionHandler = async (userDetailsReceived) => {
    try {
      const submissionResponse = await dispatch(
        authenticationSignupThunk(userDetailsReceived)
      );
      const { encodedToken: gatheredEncodedToken } =
        submissionResponse?.payload;
      if (submissionResponse?.error) {
        throw new Error(submissionResponse?.error);
      }
      if (gatheredEncodedToken) {
        navigate(from, { replace: true });
        console.log("Signed in successfully");
      }
    } catch (submissionError) {
      console.error(`Signup failed:${submissionError}`);
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
            <p className={`${styles.form_heading_text}`}>SIGN UP</p>
          </div>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              signupFormSubmissionHandler(signupCredentials);
              setSignupCredentials(initialSignupData);
            }}
            className={`g-flex-column ${styles.auth_form}`}
          >
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
                value={inputFirstName}
                onChange={(e) => {
                  setDataFromInput(e);
                }}
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
                value={inputLastName}
                onChange={(e) => {
                  setDataFromInput(e);
                }}
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
                value={inputEmail}
                onChange={(e) => {
                  setDataFromInput(e);
                }}
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
                value={inputPassword}
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
