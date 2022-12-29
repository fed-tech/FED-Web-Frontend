import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card-box";
import testi from "./../../Data/card-detail.js";

export default function Testimonial() {
  return (
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
          <Link to="/Testimonial">
            <span id="Seeall">See all</span> <span>&gt;</span>
          </Link>
          {/* <a href="./Testimonial.html" className="linkClass"></a> */}
        </p>
      </div>
      <div className="space2"></div>
    </section>
  );
}
