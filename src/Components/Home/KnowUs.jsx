import React from "react";

// Components
import Content from "./../../Components/Home/Content";

// Data
import knowus from "./../../Data/db";

// Image
import women from "./../../assets/Home/laptopWoman.png";

export default function KnowUs() {
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
    </>
  );
}
