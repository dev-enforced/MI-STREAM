import React from "react";
import { ImageSlider } from "components/ImageSlider/ImageSlider";
import { sliderImages } from "constants";
const Homepage = () => {
  return (
    <div>
      <section>
        <ImageSlider imagesProvided={sliderImages}/>
      </section>
    </div>
  );
};
export { Homepage };
