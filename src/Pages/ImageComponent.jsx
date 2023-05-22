import React, { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";

// import "./css/Core.css";

import "./../Components/Team/css/Core.css";

export default function ImageComponent({ src, blur }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();

    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = src;
  }, [src]);

  return (
    <>
      {/* {!imageLoaded && ( */}
      <div style={{ display: imageLoaded ? "none" : "inline" }}>
        <Blurhash
          hash={blur}
          width={300}
          height={435}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      </div>
      {/* )} */}
      {/* {imageLoaded && ( */}
      <img
        src={src}
        alt=""
        className="CorememCardImg"
        style={{ display: !imageLoaded ? "none" : "inline" }}
      />
      {/*  )} */}
    </>
  );
}
