import React, { Component } from "react";
import Slider from "react-slick";
import SliderComponent from "./SliderComponent"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../css/carousel.css"

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows:true
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <SliderComponent image="https://uploads-ssl.webflow.com/63a4333d6709521275441c77/63a434c4913e271fa10d3ad5_h1.png" para1="Federation of" coloredPara=" Entrepreneurship" para2="Development" para3="The Federation of Entrepreneurship Development is the student body of KIIT TBI which aims to bring all ideas, potential startups under one umbrella ☂️"/>
          </div>
          <div>
            <SliderComponent image="https://uploads-ssl.webflow.com/63a4333d6709521275441c77/63a437553e5c9a808a1c1dd5_h2-min.png" para1="It's all about" coloredPara=" Entrepreneurial" para2="Knowledge and Growth!" para3="Knowledge is power? No. Knowledge on its own is nothing, but the application of useful knowledge, now that is powerful.”― Rob Liano"/>
          </div>
          <div>
          <SliderComponent image="https://uploads-ssl.webflow.com/63a4333d6709521275441c77/63a437553e5c9a808a1c1dd5_h2-min.png" para1="Making" coloredPara=" 'start-ups' easier" para2="for you to understand and begin with!" para3="Peace is a journey of a thousand miles and it must be taken one step at a time.”― Lyndon B. Johnson"/>
          </div>
        </Slider>
      </div>
    );
  }
}