import React, { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";

import "./css/Core.css";

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
      <div
        style={{
          display: imageLoaded ? "none" : "inline",
        }}
      >
        <Blurhash
          hash={blur}
          width={230}
          height={230}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      </div>
      <img
        src={src}
        alt=""
        className="memImg"
        style={{ display: !imageLoaded ? "none" : "inline" }}
      />
    </>
  );
}
