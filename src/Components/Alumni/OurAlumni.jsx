import React from "react";
import "./css2/alumni.css";
import Card from "./card.json";
function OurAlumni() {
  return (
    <section className="alumni">
      <div className="main_body">
        <div className="ouralumni">
          <p className="para1">
            Our <span className="para2">Alumni.</span>
          </p>
        </div>
        <p className="para3">
          Effort that is done by you all for the development of our society
        </p>
      </div>
      {Card.map((card) => {
        return (
          <div className="box">
            <div className="box1">
              <img src={card.image} className="image1" alt="alumni"></img>
            </div>
          </div>
        );
      })}
    </section>
  );
}
export default OurAlumni;
