import React from "react";

import ECss from "./EventCard.module.css";

import logo from "../../../../assets/Omega/omega3.svg";

export default function EventCard(props) {
  return (
    <div className={ECss.cardMain}>
      <div className={ECss.top}>
        <div className={ECss.omega}>
          <img src={logo} alt="" />
        </div>
        <div className={ECss.eventName}>{props.name}</div>
      </div>
      <div className={ECss.eventImg}>
        <img src={props.image} alt="" />
      </div>
      <div className={ECss.bottom}>
        <div className={ECss.part1}>
          <div className={ECss.eventLogo}>
            <img src={props.logo} alt="" />
          </div>
          <div className={ECss.eventDate}>
            <div className={ECss.date}>{props.date}</div>
            <div className={ECss.month}>{props.month}</div>
          </div>
        </div>
        <div className={ECss.description}>{props.description}</div>
      </div>
    </div>
  );
}
