import React, { useEffect } from "react";

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
    <div className={SaCss.seeall_page}>
      <div className={SaCss.sub_div}>
        <div>
          <p className={SaCss.Title}>
            What do <span className={SaCss.spn}>they say</span> about us?
          </p>
        </div>
        {Wcard.map((element) => {
          return (
            <div className={SaCss.mcard}>
              <div className={SaCss.cardbox}>
                <p className={SaCss.cmt}>{element.comment}</p>
                <p className={SaCss.sp}>{element.speaker_name}</p>
                <p className={SaCss.prg}>{element.program_}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
