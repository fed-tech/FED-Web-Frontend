import React from "react";
import KnowUsCom from "../Components/Home/KnowUs";
import BelieveCom from "./../Components/Home/BelieveCom";
import Testimonial from "./../Components/Home/Testimonial";
import WorkWith from "./../Components/Home/WorkWith";

// css
import "../Components/Home/css/space.css";
import "../Components/Home/css/home.css";
import "../Components/Home/css/testimonial.css";

export default function Home() {
  return (
    <>
      Carousel
      <KnowUsCom />
      <BelieveCom />
      <Testimonial />
      <WorkWith />
    </>
  );
}
