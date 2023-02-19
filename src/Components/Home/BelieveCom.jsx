import React from "react";
import Believe from "./Believe";
import emoji from "https://em-content.zobj.net/thumbs/320/apple/325/thinking-face_1f914.png";
export default function BelieveCom() {
  return (
    <>
      <section className="Beleiver">
        <p className="BelievePTag">
          What we <span>believe</span> in...
          <span id="appleIcon">
            <img src={emoji} alt="" />
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
