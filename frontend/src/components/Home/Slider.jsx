import React from "react";
import { useBlazeSlider } from "react-blaze-slider";
import "blaze-slider/dist/blaze.css";
import "./slide.css";
import banner from "../../assests/images/banner9.jpg";
import banner1 from "../../assests/images/banner10.jpg";
import banner2 from "../../assests/images/banner11.jpg";

const Slider = () => {
  const elRef = useBlazeSlider({
    all: {
      slidesToShow: 1,
    },
  });
  return (
    <div className="mt-24">
      <div className="blaze-slider" ref={elRef}>
        <div className="blaze-container">
          <div className="blaze-track-container">
            <div className="blaze-track h-[28rem]">
              <div>
                <img src={banner} height={100} width={1400} />
              </div>
              <div>
                <img src={banner1} height={40} width={1200} />
              </div>
              <div>
                <img src={banner2} height={40} width={1200} />
              </div>
            </div>
          </div>
        </div>
        <div className="controls">
          <button className="blaze-prev">prev</button>
          <div className="blaze-pagination"></div>
          <button className="blaze-next">next</button>
        </div>
      </div>
    </div>
  );
};
export default Slider;
