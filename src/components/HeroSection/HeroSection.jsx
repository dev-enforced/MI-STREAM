import React from "react";
import { Link } from "react-router-dom";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <div
      className={`g-flex-row g-flex-wrap g-flex-align-center ${styles.heroSection}`}
    >
      <section className={`g-flex-column ${styles.heroContent}`}>
        <h1 className={`${styles.heroContentHeading} fw-700 fs-2-5`}>
          Why MI STREAM?
        </h1>
        <p>
          Interviews are a crucial part of one's life that decides the career
          curve of an individual be it for getting admission into prestigious
          institutions like LBSNAA,IIM ,etc. Or be it while switching a job to
          another well paying organisation. All of us have to pass through the{" "}
          <strong>interviews</strong>.
        </p>
        <p>
          At these crucial times,it is always better to be familiar about the
          interview process and an interactive way to help you perform better in
          it is by engaging in mock interviews helping you identify your
          strengths and weaknesses.
        </p>
        <div className={`g-flex-column ${styles.heroBtnContainer}`}>
          <Link to="/explore" className={`link-none ${styles.heroBtn}`}>
            Explore Now
          </Link>
        </div>
      </section>
      <section className={`${styles.heroImageContainer}`}>
        <img src="assets/HeroSectionImage.svg" alt="Interview Process Familiar" loading="lazy" />
      </section>
    </div>
  );
};
export { HeroSection };
