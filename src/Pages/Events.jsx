import React, { useEffect } from "react";

// Components
import Card from "../Components/Events/card/jsx/Card.jsx";
import Header from "../Components/Events/header/jsx/Header.jsx";
import SkillHunt from "./../Components/Events/SkillHunt/SkillHunt.jsx";

export default function Events() {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div>
        <Header head="Cuurent Events" />
        <SkillHunt />
      </div>
      <div>
        <Header head="Previous Events" />
        <Card />
      </div>
    </>
  );
}
