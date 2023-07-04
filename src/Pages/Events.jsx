import React, { useEffect } from "react";

// Components
import Card from "../Components/Events/card/jsx/Card.jsx";
import Header from "../Components/Events/header/jsx/Header.jsx";

export default function Events() {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
      <div>
        <Header head="Previous Events" />
        <Card />
      </div>
  );
}
