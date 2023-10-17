import React from "react";

import ECss from "./EventCard.module.css";

import logo from "../../../../assets/Omega/omega3.svg";
import sitcom from "../../../../assets/Omega/page1/sitcom.png";
import sitcomLogo from "../../../../assets/Omega/events/sitcom.svg";

export default function EventCard() {
  return (
    <div className={ECss.cardMain}>
      <div className={ECss.top}>
        <div className={ECss.omega}>
          <img src={logo} alt="" />
        </div>
        <div className={ECss.eventName}>Sitcom saga</div>
      </div>
      <div className={ECss.eventImg}>
        <img src={sitcom} alt="" />
      </div>
      <div className={ECss.bottom}>
        <div className={ECss.part1}>
          <div className={ECss.eventLogo}>
            <img src={sitcomLogo} alt="" />
          </div>
          <div className={ECss.eventDate}>
            <div className={ECss.date}>4th</div>
            <div className={ECss.month}>April</div>
          </div>
        </div>
        <div className={ECss.description}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
          veritatis autem sint earum vero ducimus inventore sequi nisi fugit
          quibusdam! Pariatur perferendis, id nobis accusantium, ut quidem
          distinctio numquam facilis magnam iure quisquam ipsum molestiae
          beatae! Nihil consequuntur inventore ducimus aliquam temporibus hic ea
          culpa beatae adipisci, dolores praesentium iste! Dignissimos tempora
          impedit tenetur cum, sequi maxime dolores iure enim ullam veniam
          perferendis doloremque nostrum et nihil explicabo in soluta
          necessitatibus provident odio repudiandae. Iste fugit sunt eaque
          recusandae dolorem. Sunt ratione necessitatibus, quis eos quasi
          repudiandae animi nulla at dignissimos sit quam architecto iusto
          voluptate numquam excepturi cupiditate ea.
        </div>
      </div>
    </div>
  );
}
