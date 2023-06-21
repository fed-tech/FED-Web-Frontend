import React from "react";
import { Animatedpage } from "../Components/Animatedpage";

// css
import SaCss from "./Css/seall.module.css";

// Data
import Wcard from "./../Data/testimonial.json";

export default function Testimonial() {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Animatedpage>
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
    </Animatedpage>
  );
}
