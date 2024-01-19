import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./css/SliderComponent.css";
import { Blurhash } from "react-blurhash";

export default function SliderComponent(props) {
  const [isImageLoaded, setImageLoaded] = useState(false);
  const redirect = useNavigate();

  useEffect(() => {
    const img = new Image();
    img.src = props.image;
    img.onload = () => setImageLoaded(true);
  }, [props.image]);



  return (
    <div className="carousel">
      {!isImageLoaded && (
        <Blurhash
          hash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
          width={2000}
          height={800}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      )}
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
