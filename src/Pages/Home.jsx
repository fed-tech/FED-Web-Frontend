import React from "react";
import Content from "../Components/Home/KnowUs/jsx/Content";
import Believe from "../Components/Home/WeBelieveIn/Believe";
import knowus from "../Components/Home/KnowUs/db.js";
import women from "../Img/image 7.png";
import "../Components/Home/KnowUs/css/space.css";
import "../Components/Home/css/home.css";
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
             <Believe/>
          </div>
        </section>
        <div className="space"></div>
    </>
  );
}
