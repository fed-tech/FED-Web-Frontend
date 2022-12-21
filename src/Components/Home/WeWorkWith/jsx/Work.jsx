import React from "react";
import Data from "../org.json";
import "../css/workwith.css";
import Slider from "react-slick";

export default function Work() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  console.log(Data);
  return (
    <>
      <Slider {...settings}>
        {Data.map((data, i) => (
          <div key={i}>
            <img src={data.src} height={100} width={250} alt="" />
          </div>
        ))}
      </Slider>
    </>
  );
}
