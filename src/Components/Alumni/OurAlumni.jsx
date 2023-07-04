import React from "react";

// css
import "./css/alumni.css";

// Data
import Card from "./../../Data/card.json";

// Icons
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

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
                    <h1 className="heading_1">{card.title_}</h1>
                    <h3>{card.subtitle}</h3>
                    <p>{card.para_}</p>
                    <div className="icon_">
                      <a href={card.github_link}>
                        <div className="iconimage">
                          <GitHubIcon />
                        </div>
                      </a>
                      <a href={card.linkedin_link}>
                        <div className="iconimage">
                          <LinkedInIcon />
                        </div>
                      </a>
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
