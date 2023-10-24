import React, { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import OMCss from "./Main.module.css";
import EventCard from "./cards/EventCard";
import AuthContext from "../../../store/auth-context";

import omegaRetro from "../../../assets/Omega/omegaRetro.webp";
import click from "../../../assets/Omega/Maskgroup.svg";

import { eventDetails } from "./eventDetails";

export default function Main(props) {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const authCtx = useContext(AuthContext);
  const redirect = useNavigate();

  const register = () => {
    if (authCtx.token == null) {
      authCtx.settarget("omega");
      redirect("/Login");
    } else {
      props.setShift(true);
    }
  };

  return (
    <div className={OMCss.main}>
      <div className={OMCss.registerBtn}>
        <div className={OMCss.image}>
          <img src={omegaRetro} alt="" />
        </div>
        <div className={OMCss.button} onClick={register}>
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
