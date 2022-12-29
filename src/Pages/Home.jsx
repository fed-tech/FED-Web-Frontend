import React from "react";
import Content from "../Components/Home/KnowUs/jsx/Content";
import Believe from "../Components/Home/WeBelieveIn/Believe";
import Card from "../Components/Home/Testimonial/jsx/Card-box";
import testi from "../Components/Home/Testimonial/card-detail.js";
import Img from "../Components/Home/WeWorkWith/jsx/Work";
import knowus from "./../Data/db";
import women from "../Img/image 7.png";
import "../Components/Home/KnowUs/css/space.css";
import "../Components/Home/css/home.css";
import "../Components/Home/Testimonial/css/testimonial.css";

export default function Home() {
  return (
    <>
      <section id="KnowUs">
        <div className="KnowUsmDiv">
          <p id="KnowUspTag">
            <span className="KnowUspTag">Know us </span>
            better...
          </p>
          <img src={women} alt="" className="womenWithALaptop" />
          <p id="womenBelowText">
            Federation of Entrepreneurship Development (FED) is a group of KIIT
            TBI students that want to encourage individuals with entrepreneurial
            aspirations by bringing all prospective startup ideas together on
            one platform. By planning events to promote entrepreneurship
            awareness, FED connects you with the best resources, contacts, and
            mentors.
          </p>
        </div>
        {/* Why_What_How */}
        <div className="WhyHowWhatDiv">
          <Content knowus={knowus[0]} />
          <Content knowus={knowus[1]} />
          <Content knowus={knowus[2]} />
        </div>
        <div className="space1"></div>
      </section>
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
