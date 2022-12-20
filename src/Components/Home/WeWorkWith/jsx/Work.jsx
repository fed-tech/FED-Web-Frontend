import React from "react";
import Data from "../org.json";
import "../css/workwith.css";
import { A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
export default function Img(props) {
  console.log(Data);
  return (
    <>
      {/* <div className="slide">
        <img src="" height={100} width={250} alt="" />
      </div> */}
      <Swiper
        // install Swiper modules
        className="swiper_work"
        modules={[A11y, Autoplay]}
        spaceBetween={220}
        slidesPerView={27}
        autoplay={{ delay: 2000 }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {/* <SwiperSlide><div className="slide">
        <img src="" height={100} width={250} alt="" />
      </div></SwiperSlide> */}
        {Data.map((data, i) => (
          <SwiperSlide key={i}>
            <div className="slide">
              <img src={data.src} height={100} width={250} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
