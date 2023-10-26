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
    <>
      {/* <div>
        <Header head="Current Events" />
        <SkillHunt />
      </div> */}
      <div>
        <Header head="Upcomming Events" />
        <Card />
      </div>

      <div>
        <Header head="Previous Events" />
        <CardPrev />
      </div>
    </>
  );
}
