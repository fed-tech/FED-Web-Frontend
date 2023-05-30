import React, { useEffect } from "react";

// Helmet
import { Helmet } from "react-helmet";

// Components
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
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Federation of Entrepreneurship Development</title>
        <meta
          name="description"
          content="Our Homepage is the main webpage of a website that serves as the primary entry point for visitors. Its purpose is to provide an overview of what our society stands for, what we believe in and what others think about FED."
        />
        <meta
          property="og:title"
          content="Federation of Entrepreneurship Development"
        />
        <meta property="og:url" content="https://fedkiit.com" />
        <meta
          property="og:description"
          content="Our Homepage is the main webpage of a website that serves as the primary entry point for visitors. Its purpose is to provide an overview of what our society stands for, what we believe in and what others think about FED. "
        />
        <meta
          property="og:image"
          itemprop="image"
          content="https://ik.imagekit.io/vgd1bllwv/fed.png?updatedAt=1685457447183"
        />
        <meta property="og:type" content="website" />

        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta
          property="twitter:url"
          content="https://twitter.com/services_enr"
        ></meta>
        <meta
          property="twitter:title"
          content="Federation of Entrepreneurship Development"
        ></meta>
      </Helmet>

      <Carousel />
      <KnowUsCom />
      <BelieveCom />
      <Testimonial />
      <WorkWith />
      <LetsTalkBusiness />
    </>
  );
}
