import React from "react";
import Img from "../Components/Home/Work";
import KnowUsCom from "../Components/Home/KnowUs";
import BelieveCom from "./../Components/Home/BelieveCom";
import Testimonial from "./../Components/Home/Testimonial";

// css
import "../Components/Home/css/space.css";
import "../Components/Home/css/home.css";
import "../Components/Home/css/testimonial.css";

export default function Home() {
  return (
    <>
      Carousel
      <br />
      <KnowUsCom />
      <BelieveCom />
      <Testimonial />
      <section id="work">
        <div className="WeWorkWith">
          <p className="WeWorkWithPTag">
            We <span>work</span> with...
          </p>
          {/* Slider */}
          <div className="slideParentDiv">
            <div className="slider">
              <div className="slide-track">
                <Img />
              </div>
            </div>
          </div>
          <div className="pTagDivWork">
            <p className="workptagDes">
              We wish to express our deepest gratitude to our sponsors for their
              steadfast support and generosity, and for their dedication to
              making a difference in the entrepreneurial community by supporting
              grassroots initiatives.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
