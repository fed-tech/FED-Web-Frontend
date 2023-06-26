import React from "react";

export default function Layout(props) {
  return (
    <div className="BodyDiv">
      <main>{props.children}</main>
    </div>
  );
}
