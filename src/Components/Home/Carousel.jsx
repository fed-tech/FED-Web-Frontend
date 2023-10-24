import Slider from "react-slick";
import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Component
import SliderComponent from "./SliderComponent";

// Css
import "./css/carousel.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: true,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <SliderComponent
              image="https://uploads-ssl.webflow.com/63fa5ca40e9534258ea78986/63fa6c18300f0c3b718d0f99_h1.png"
              para1="Federation of"
              coloredPara=" Entrepreneurship"
              para2="Development"
              para3="The Federation of Entrepreneurship Development is the student body of KIIT TBI which aims to bring all ideas, potential startups under one umbrella ☂️"
              button="false"
            />
          </div>
          <div>
            <SliderComponent
              image="https://uploads-ssl.webflow.com/629d87f593841156e4e0d9a4/63fa4f220e953405a5a68e95_h2.png"
              para1="It's all about"
              coloredPara=" Entrepreneurial"
              para2="Knowledge and Growth!"
              para3='"Knowledge is power? No. Knowledge on its own is nothing, but the application of useful knowledge, now that is powerful."― Rob Liano'
              button="false"
            />
          </div>
          <div>
            <SliderComponent
              image="https://uploads-ssl.webflow.com/63fa5ca40e9534258ea78986/63fa6bab4e9a8cee9d6fbaae_hthree.png"
              para1="Making"
              coloredPara=" 'start-ups' easier"
              para2="for you to understand and begin with!"
              para3='"Peace is a journey of a thousand miles and it must be taken one step at a time."― Lyndon B. Johnson'
              button="false"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
