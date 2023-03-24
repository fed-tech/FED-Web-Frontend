import React, { Component } from "react";
import Data from "./../../Data/org.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/workwith.css";

export default class SimpleSlider extends Component {
  render() {
    const setting = {
      dots: false,
      arrows: false,
      infinite: true,
      autoplaySpeed: 0,
      speed: 10000,
      slidesToShow: 4.5,
      slidesToScroll: 11,
      autoplay: true,
      accessibility: false,
      draggable: false,
      pauseOnHover: false,
      centerPadding: "20px",
      ease: "ease-out",
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 520,
          settings: {
            slidesToShow: 1.5,
          },
        },
        {
          breakpoint: 390,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    return (
      <div>
        <Slider {...setting}>
          {Data.map((data, i) => (
            <div key={i} className="img-style">
              <img src={data.src} alt="" />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
