import React from "react";
import "./css/SliderComponent.css";

export default function SliderComponent(props) {
  return (
    <div className="carousel">
      <div
        className="text"
        style={{
          backgroundImage: `url('${props.image}')`,
          height: "740px",
          width: "100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <p className="textFed">
          {props.para1}
          <span>{props.coloredPara}</span>
          <br />
          {props.para2}
        </p>
        <p className="textFedDescription">{props.para3}</p>
        {props.button == "true" ? (
          <>
            <button className="carouselButton">Register Now!!</button>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
