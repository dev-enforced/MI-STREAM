import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ImageSlider, HeroSection, Categories } from "components";
import { getCategories } from "reduxFiles";
import { sliderImages } from "constants";
import styles from "./Homepage.module.css";

const Homepage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  const { categoriesList } = useSelector(
    (storeReceived) => storeReceived.category
  );
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
