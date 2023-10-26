import React, { useEffect, useState } from "react";

// MicroInterAction
import { getOrdinal } from "../../../../MicroInterAction/ordinal";

// css
import MECs from "./Css/MyEventCards.module.css";

function EventCards({ info, setShow, setCardNo, getTeamDetails }) {
  const handleShow = () => {
    setShow(true);
    setCardNo(info);
    getTeamDetails(info);
  };

  return (
    <div className={MECs.mDiv}>
      <div className={MECs.eventImg}>
        <img src={info.img} alt="" className={MECs.imgTag} />
      </div>

      <div className={MECs.event_content}>
        <h2>{info.title}</h2>
        <div className={MECs.date_and_month}>
          <p className={MECs.date}>
            {new Date(info.date).getDate()}{" "}
            <span className={MECs.superscript}>
              {getOrdinal(new Date(info.date).getDate())}
            </span>
          </p>
          <p>
            {new Date(info.date).toLocaleString("default", { month: "long" })}
          </p>
        </div>
      </div>

      {info.isTeam ? (
        <button className={MECs.showDetailsBtn} onClick={handleShow}>
          Show Team Details
        </button>
      ) : (
        <></>
      )}
    </div>
  );
}

export default EventCards;
