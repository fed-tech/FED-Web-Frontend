import React, { useEffect } from "react";

// Components
import Card from "../Components/Events/card/Card";
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
        <Header head="Our Events" />
        <Card />
      </div>
    </>
  );
}
