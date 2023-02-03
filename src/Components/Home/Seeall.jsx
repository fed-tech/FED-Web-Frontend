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
                <p className="cmt">{Wcard.comment}</p>
                <p className="sp">{Wcard.speaker_name}</p>
                <p className="prg">{Wcard.program_}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Seeall;
