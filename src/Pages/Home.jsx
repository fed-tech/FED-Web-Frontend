import React from "react";
import Carousel from "../Components/Home/Carousel";
import KnowUsCom from "../Components/Home/KnowUs";
import BelieveCom from "./../Components/Home/BelieveCom";
import Testimonial from "./../Components/Home/Testimonial";
import WorkWith from "./../Components/Home/WorkWith";
import LetsTalkBusiness from "./../Components/Home/LetsTalkBusiness";

// css
import "../Components/Home/css/space.css";
import "../Components/Home/css/home.css";
import "../Components/Home/css/testimonial.css";

export default function Home() {
  React.useEffect(() => {       window.scrollTo(0, 0);     }, []);
  return (
    <>
      <Carousel />
      <KnowUsCom />
      <BelieveCom />
      <Testimonial />
      <WorkWith />
      <LetsTalkBusiness />
    </>
  );
}
