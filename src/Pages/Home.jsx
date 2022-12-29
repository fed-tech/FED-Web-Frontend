import React from "react";
import Believe from "../Components/Home/Believe";
import Card from "../Components/Home/Card-box";
import testi from "../Data/card-detail.js";
import Img from "../Components/Home/Work";
import KnowUsCom from "../Components/Home/KnowUs";

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
      {/* -----------------------Believe ------------------------------- */}
      <section className="Beleiver">
        <p className="BelievePTag">
          What we <span>believe</span> in...
          <span id="appleIcon">
            <img
              src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/apple/48/thinking-face_1f914.png"
              alt=""
            />
          </span>
        </p>
        <div className="believeCenterDiv">
          <Believe />
        </div>
      </section>
      <div className="space"></div>
      {/* -------------------------------------------------Testimonial-------------------------------------- */}
      <section id="testimonial">
        <p className="BelievePTag">
          What do <span>they say</span> about us?
        </p>
        <div className="testDivMain">
          <div className="testDivChild">
            <Card testi={testi[0]} />
            <Card testi={testi[1]} />
          </div>
        </div>
        <div className="SeeallDiv">
          <p className="Seeall">
            <a href="./Testimonial.html" className="linkClass">
              <span id="Seeall">See all</span> <span>&gt;</span>
            </a>
          </p>
        </div>
        <div className="space2"></div>
      </section>
      {/* ----------------------------------------------------WE WORK WITH----------------------------------------  */}
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
