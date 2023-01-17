import React, { useState, useEffect } from "react";
import "./css1/youtube.css";
function Card(props) {
  return (
    <div className="div1">
      <div className="underdiv1">
        <div className="items">
          <div className="imagediv">
            <img src={props.image} className="image1" alt="Empowering"></img>
          </div>
          <div className="eti">
            <h4 className="empowering">{props.title}</h4>
            <h4 className="ep">{props.episode}</h4>
            <p className="paragraph">{props.para}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
