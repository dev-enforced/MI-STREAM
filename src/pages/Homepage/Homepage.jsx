import React from "react";
import { ImageSlider,HeroSection,Categories } from "components";
import { sliderImages } from "constants";
import styles from "./Homepage.module.css"
const arr=[1,2,3];
const Homepage = () => {
  return (
    <div>
      <section className="image-slider">
        <ImageSlider imagesProvided={sliderImages}/>
      </section>
      <section className="hero-section">
          <HeroSection/>
      </section>
      <section className={`${styles.categories_wrapper} g-flex-column g-flex-center`}>
        <h1 className={`${styles.categories_section_heading}`}>CATEGORIES</h1>
        <Categories categoriesGiven={arr}/>
      </section>
    </div>
  );
};
export { Homepage };
