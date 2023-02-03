import React from "react";
import "./css/seeall.css";
import Wcard from "./testimonial.json";
function Seeall() {
  return (
    <div className="seeall_page">
      <div className="sub_div">
        {Wcard.map((element) => {
          return (
            <div className="mcard">
              <div className="cardbox">
                <p className="comment">{element.comment}</p>
                <p className="text_2">{element.speaker_name}</p>
                <p className="text_3">{element.program_}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Seeall;
