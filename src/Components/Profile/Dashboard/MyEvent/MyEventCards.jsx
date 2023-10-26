import React, { useEffect, useState } from "react";

// css
import "./MyEventCards.css";
import axios from "axios";
import { Button } from "@mui/material";
import { getOrdinal } from "../../../../MicroInterAction/ordinal";

function EventCards({ info, setShow, setCardNo, getTeamDetails }) {
  const handleShow = () => {
    setShow(true);
    setCardNo(info);
    getTeamDetails(info);
  };
  return (
    <div className="eventcards">
      <div className="event_img">
        <img src={info.img} alt="" />
      </div>
      <div className="event_content">
        <h2>{info.title}</h2>
        <div className="date_and_month">
          <p className="date">
            {new Date(info.date).getDate()}{" "}
            <span className="superscript">
              {getOrdinal(new Date(info.date).getDate())}
            </span>
          </p>
          <p>
            {new Date(info.date).toLocaleString("default", { month: "long" })}
          </p>
        </div>
      </div>
      {info.isTeam ? (
        <button className="showDetailsBtn" onClick={handleShow}>
          Show Team Details
        </button>
      ) : (
        <></>
      )}
    </div>
  );
}

export default EventCards;
