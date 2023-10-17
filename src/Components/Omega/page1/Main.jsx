import React, { useEffect } from "react";

import OMCss from "./Main.module.css";

import omegaRetro from "../../../assets/Omega/omegaRetro.webp";
import click from "../../../assets/Omega/Maskgroup.svg";
import EventCard from "./cards/EventCard";

import { eventDetails } from "./eventDetails";

export default function Main() {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={OMCss.main}>
      <div>
        <div className={OMCss.image}>
          <img src={omegaRetro} alt="" />
        </div>
        <div className={OMCss.button}>
          <div className={OMCss.buttonText}>REGISTER NOW</div>
          <div className={OMCss.buttonImage}>
            <img src={click} alt="" />
          </div>
        </div>
      </div>
      <div className={OMCss.cards}>
        {eventDetails.map((e) => {
          return (
            <EventCard
              name={e.name}
              image={e.image}
              logo={e.logo}
              date={e.date}
              month={e.month}
              description={e.description}
            />
          );
        })}
      </div>
    </div>
  );
}
