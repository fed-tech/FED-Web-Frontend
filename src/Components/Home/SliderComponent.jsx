import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/SliderComponent.css";

export default function SliderComponent(props) {
  const redirect = useNavigate();
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
            <button
              className="carouselButton"
              onClick={() => {
                redirect("/event");
              }}
            >
            Register Now!!
            </button>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
