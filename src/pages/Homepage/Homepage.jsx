import React from "react";
import { ImageSlider,HeroSection } from "components";
import { sliderImages } from "constants";
const Homepage = () => {
  return (
    <div>
      <section className="image-slider">
        <ImageSlider imagesProvided={sliderImages}/>
      </section>
      <section className="hero-section">
          <HeroSection/>
      </section>
    </div>
  );
};
export { Homepage };
