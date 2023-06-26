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
        {Wcard.map((e, key) => {
          return (
            <div className={SaCss.mcard} key={key}>
              <div className={SaCss.cardbox}>
                <p className={SaCss.cmt}>{e.comment}</p>
                <p className={SaCss.sp}>{e.speaker_name}</p>
                <p className={SaCss.prg}>{e.program_}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
