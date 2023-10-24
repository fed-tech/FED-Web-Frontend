import React from "react";

// css
import "../css/eventHeader.css";

export default function Header(props) {
  return (
    <div>
      <div className="heading">{props.head}</div>
    </div>
  );
}
