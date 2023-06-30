import React from "react";

// Components
import Img from "./Work";

export default function WorkWith() {
  return (
    <section id="work">
      <div className="WeWorkWith">
        <p className="WeWorkWithPTag">
          We <span>work</span> with...
        </p>

        {/* Slider */}
        <div className="slideParentDiv">
          <div className="slider">
            <div className="slide-track">
              <Img />
            </div>
          </div>
        </div>

        <div className="pTagDivWork">
          <p className="workptagDes">
            We wish to express our deepest gratitude to our sponsors for their
            steadfast support and generosity, and for their dedication to making
            a difference in the entrepreneurial community by supporting
            grassroots initiatives.
          </p>
        </div>
      </div>
    </section>
  );
}
