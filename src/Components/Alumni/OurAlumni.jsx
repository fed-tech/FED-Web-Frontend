import React from "react";
import "./css2/alumni.css";
import Card from "./card.json";
function OurAlumni() {
  return (
    <section className="alumni">
      <div className="main_body">
        <div className="ouralumni">
          <p className="para1_">
            Our <span className="para2_">Alumni.</span>
          </p>
        </div>
        <p className="para3_">
          Effort that is done by you all for the development of our society
        </p>
      </div>
      <div className="bottomcontainer_">
        {Card.map((card) => {
          return (
            <div className="box_">
              <div className="box1_">
                <img src={card.image_} className="image_1" alt="alumni"></img>
              </div>
              <div className="child_">
                <div className="content_">
                  <img
                    src={card.vector}
                    className="vectorimage"
                    alt="vector"
                  ></img>
                  <h1 className="heading_1">{card.title_}</h1>
                  <h3>{card.subtitle}</h3>
                  <p>{card.para_}</p>
                  <div className="icon_">
                    <img
                      src={card.twitter_}
                      className="iconimage"
                      alt="icons"
                    ></img>
                    <img
                      src={card.link_}
                      className="iconimage"
                      alt="icons"
                    ></img>
                    <img
                      src={card.globe}
                      className="iconimage"
                      alt="icons"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default OurAlumni;
