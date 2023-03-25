import React from "react";

// css
import "./../Components/Testimonial/Css/seeall.css";

// json
import Wcard from "./../Data/testimonial.json";

export default function Testimonial() {
  return (
    <div className="seeall_page">
      <div className="sub_div">
        {Wcard.map((element) => {
          return (
            <div className="mcard">
              <div className="cardbox">
                <p className="cmt">{element.comment}</p>
                <p className="sp">{element.speaker_name}</p>
                <p className="prg">{element.program_}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
