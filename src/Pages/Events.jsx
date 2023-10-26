import React, { useEffect } from "react";

// Components
import Card from "../Components/Events/card/Card";
import CardPrev from "../Components/Events/card/CardPrev";
import Header from "../Components/Events/header/jsx/Header.jsx";

export default function Events() {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mEventsDiv">
      <div>
        <Header head="Upcoming Events" />
        <Card />
      </div>

      <div>
        <Header head="Previous Events" />
        <CardPrev />
      </div>
    </div>
  );
}
