import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const ImageSlider = ({ imagesProvided }) => {
  return (
    <Carousel
      emulateTouch
      infiniteLoop
      autoPlay
      showStatus={false}
      interval={3000}
    >
      {imagesProvided.map((everyImageUrl, index) => {
        return (
          <div key={`${index + 1}:${everyImageUrl}`}>
            <img src={everyImageUrl} alt="INTERVIEW PREP SNAPSHOTS" />
            <p></p>
          </div>
        );
      })}
    </Carousel>
  );
};
export { ImageSlider };
