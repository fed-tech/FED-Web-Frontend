import Slider from "react-slick";
import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

// Component
import SliderComponent from "./SliderComponent";

// Css
import "./css/carousel.css";

export default class SimpleSlider extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    this.setState({ isMobile: window.innerWidth < 768 });
  };

  render() {

    const { isMobile } = this.state;
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
          {/*<div>
            <SliderComponent
              image="https://uploads-ssl.webflow.com/64553d5a8ac054ad27b992c4/65aaaf1b9023e275f7c27cdd_65a945cc1f0bba41c914ddb0_Rectangle%2039268-min.jpg"
              para1="Federation of"
              coloredPara=" Entrepreneurship"
              para2="Development"
              para3="The Federation of Entrepreneurship Development is the student body of KIIT TBI which aims to bring all ideas, potential startups under one umbrella ☂️"
              button="false"
            />
          </div>*/}

          <div className="ongoingevent">
            <Link to="/event">
                <SliderComponent
                  image={!isMobile ? "https://uploads-ssl.webflow.com/645fbc01f38b6fb6255c240c/664283d169e2513c1a7a5cdd_websiter%20poster%20desktop.jpg" : 
                                      "https://uploads-ssl.webflow.com/645fbc01f38b6fb6255c240c/66428a14833ffa5156f13009_Mobile%20final.jpg"}
                  button="false"
                />
            </Link>
          </div>
          
          {/*<div className="ongoingevent">
            <Link to="/event">
                <SliderComponent
                  image={!isMobile ? "https://uploads-ssl.webflow.com/65f05fbb8ea3c917f4e8689d/65f0600fd1cd3798c015a005_Website%20Poster%20laptop.jpg" : 
                                      "https://uploads-ssl.webflow.com/65f05fbb8ea3c917f4e8689d/65f0756e74cf8efb28160829_Website%20Poster%20mobile.jpg"}
                  button="false"
                />
            </Link>
          </div>*/}
          {/* <div>
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
          </div> */}
        </Slider>
      </div>
    );
  }
}
