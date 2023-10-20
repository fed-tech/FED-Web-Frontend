import React, { useEffect } from "react";
// import OMCss from '../page1/Main.module.css'
import RegCss from './Register.module.css'

import RegisterCards from "./RegisterCards";
// import EventCard from "../page1/cards/EventCard";
import { eventDetails } from "../page1/eventDetails";


// import AuthContext from "../../../store/auth-context";

export default function Main() {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cards = eventDetails.map((event, idx) => {
    return <RegisterCards
      key={idx}
      logo={event.logo}
      img={event.image}
      desc={event.description}
    />
  });
  return <div className={RegCss.main}>
    <div className={RegCss.events}>EVENTS.</div>
    <div className={RegCss.regCards}>
      {cards}
    </div>
  </div>
}
