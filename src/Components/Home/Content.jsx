import React from "react";

export default function knowus(props) {
  return (
    <>
      <div className={props.knowus.class}>
        <img src={props.knowus.img} alt="" className="what" />
        <p className="questionpTag">
          <span>{props.knowus.for}</span>
        </p>
        <p className="CardDesPTag">
          {props.knowus.content1}
          <span>{props.knowus.content2}</span>
          {props.knowus.content3}
        </p>
      </div>
    </>
  );
}
