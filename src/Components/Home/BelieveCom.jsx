import React from "react";
import Believe from "./Believe";

export default function BelieveCom() {
  return (
    <>
      <section className="Beleiver">
        <p className="BelievePTag">
          What we <span>believe</span> in...
          <span id="appleIcon">
            <img
              src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/apple/48/thinking-face_1f914.png"
              alt=""
            />
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
