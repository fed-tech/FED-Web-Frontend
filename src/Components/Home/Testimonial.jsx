import React from "react";
import Card from "./Card-box";
import { Link } from "react-router-dom";
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
          <Link to="/Testimonial" className="LinkStyle">
            <span id="Seeall">See all</span> <span>&gt;</span>
          </Link>
        </p>
      </div>

      <div className="space2"></div>
    </section>
  );
}
