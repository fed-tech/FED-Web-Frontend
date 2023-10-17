import React, { useEffect } from "react";

import OMCss from "./Main.module.css";

import omegaRetro from "../../../assets/Omega/omegaRetro.png";
import click from "../../../assets/Omega/Maskgroup.svg";
import EventCard from "./cards/EventCard";

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
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
}
