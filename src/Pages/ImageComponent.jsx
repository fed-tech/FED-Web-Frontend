import React, { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";

export default function ImageComponent({ src }) {
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
          hash="L8E,T#j@RlRk}@kC,@RkOXf*$*9]"
          width={100}
          height={100}
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
        style={{ display: !imageLoaded ? "none" : "inline" }}
      />
      {/*  )} */}
    </>
  );
}
