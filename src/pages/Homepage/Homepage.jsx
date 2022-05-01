import React from "react";
import { ImageSlider, HeroSection, Categories } from "components";
import { useCategories } from "context";
import { sliderImages } from "constants";
import styles from "./Homepage.module.css";

const Homepage = () => {
  const { categoriesList } = useCategories();
  return (
    <>
      <section className="image-slider">
        <ImageSlider imagesProvided={sliderImages} />
      </section>
      <section className="hero-section">
        <HeroSection />
      </section>
      <section
        className={`${styles.categories_wrapper} g-flex-column g-flex-center`}
      >
        <h1 className={`${styles.categories_section_heading}`}>CATEGORIES</h1>
        <Categories categoriesGiven={categoriesList} />
      </section>
    </>
  );
};
export { Homepage };
