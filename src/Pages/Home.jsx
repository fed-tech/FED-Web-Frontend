import React from "react";
import Carousel from "./../Components/Home/Carousel";
import KnowUs from "./../Components/Home/KnowUs";
import Believe from "./../Components/Home/Believe";
import SayAboutUs from "./../Components/Home/SayAboutUs";
import WorkWith from "./../Components/Home/WorkWith";
import Business from "./../Components/Home/Business";

export default function Home() {
  return (
    <div>
      <Carousel />
      <KnowUs />
      <Believe />
      <SayAboutUs />
      <WorkWith />
      <Business />
    </div>
  );
}
