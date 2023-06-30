import React from "react";

// Components
import Believe from "./Believe";

// img
import Emoji from "./../../assets/Home/thingingIcon.png";

export default function BelieveCom() {
  return (
    <>
      <section className="Beleiver">
        <p className="BelievePTag">
          What we <span>believe</span> in...
          <span id="appleIcon">
            <img src={Emoji} alt="" />
          </span>
        </p>

        <div className="believeCenterDiv">
          <Believe />
        </div>
      </section>

      <div className="space"></div>
    </>
  );
}
