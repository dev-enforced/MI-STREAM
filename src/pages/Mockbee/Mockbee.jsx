import React from "react";
import logo from "../../logo.png";
import styles from "./Mockbee.module.css";

const Mockbee = () => {
  return (
    <>
      <div className={`${styles.App}`}>
        <header className={`${styles.AppHeader}`}>
          <img src={logo} alt="mockBee logo" width="180" height="180" />
          <h1 className={`${styles.brandTitle}`}>
            Welcome to <span>mockBee!</span>
          </h1>
          <p className={`${styles.brandDescription}`}>
            Get started by editing <code>src/App.js</code>
          </p>
          <div className={`${styles.links}`}>
            <a
              href="https://mockbee.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Explore mockBee
            </a>
            <a
              href="https://mockbee.netlify.app/docs/api/introduction"
              target="_blank"
              rel="noreferrer"
            >
              API Documentation
            </a>
            <a
              href="https://github.com/neogcamp/mockBee"
              target="_blank"
              rel="noreferrer"
            >
              Contribute
            </a>
          </div>
        </header>
      </div>
    </>
  );
};
export { Mockbee };
