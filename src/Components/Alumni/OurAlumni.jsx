import React from "react";

// Data
import Card from "./../../Data/card.json";

// Icons
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// css
import ACss from "./css/Alumni.module.css";

function OurAlumni() {
  return (
    <section className={ACss.alumni}>
      <div className={ACss.mainBody}>
        <div className={ACss.ouralumni}>
          <p className={ACss.para1Ptag}>
            Our <span className={ACss.para2Ptag}>Alumni.</span>
          </p>
        </div>
        <p className={ACss.para3Ptag}>
          Effort that is done by you all for the development of our society
        </p>
      </div>
      <div className={ACss.bottomcontainer_}>
        {Card.map((card) => {
          return (
            <div className={ACss.Block}>
              <div className={ACss.box1_}>
                <img
                  src={card.image_}
                  className={ACss.image_1}
                  alt="alumni"
                ></img>
              </div>
              <div className={ACss.childLabelDiv}>
                <div className={ACss.content_}>
                  <h1 className={ACss.heading_1}>{card.title_}</h1>
                  <h3>{card.subtitle}</h3>
                  <p>{card.para_}</p>
                  <div className={ACss.icon_}>
                    <a href={card.github_link} target="_blank">
                      <div className={ACss.iconimage}>
                        <GitHubIcon />
                      </div>
                    </a>
                    <a href={card.linkedin_link} target="_blank">
                      <div className={ACss.iconimage}>
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
