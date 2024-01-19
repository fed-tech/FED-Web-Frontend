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
              image="https://uploads-ssl.webflow.com/64553d5a8ac054ad27b992c4/65aaaf1b9023e275f7c27cdd_65a945cc1f0bba41c914ddb0_Rectangle%2039268-min.jpg"
              para1="FED is"
              coloredPara=" Recruiting!"
              para2="Join FED - Ignite Your Entrepreneurial Spirit!"
              para3="Discover a world of innovation and creativity at the Federation of Entrepreneurship Development(FED)"
              button="true"
            />
          </div>
          <div>
            <SliderComponent
              image="https://uploads-ssl.webflow.com/64553d5a8ac054ad27b992c4/65aaaebb4154d6975cb896fe_63fa6c18300f0c3b718d0f99_h1-min.jpg"
              para1="Federation of"
              coloredPara=" Entrepreneurship"
              para2="Development"
              para3="The Federation of Entrepreneurship Development is the student body of KIIT TBI which aims to bring all ideas, potential startups under one umbrella ☂️"
              button="false"
            />
          </div>
          <div>
            <SliderComponent
              image="https://uploads-ssl.webflow.com/64553d5a8ac054ad27b992c4/65aaaf8486bd6daec10ee10d_63fa4f220e953405a5a68e95_h2-min.jpg"
              para1="It's all about"
              coloredPara=" Entrepreneurial"
              para2="Knowledge and Growth!"
              para3='"Knowledge is power? No. Knowledge on its own is nothing, but the application of useful knowledge, now that is powerful."― Rob Liano'
              button="false"
            />
          </div>
          <div>
            <SliderComponent
              image="https://uploads-ssl.webflow.com/64553d5a8ac054ad27b992c4/65aaafc18383e3dd1f4ecad0_vinit-min.jpg"
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
