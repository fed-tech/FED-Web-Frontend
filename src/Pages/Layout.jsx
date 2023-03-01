import React from "react";
import { Animatedpage } from "../Components/Animatedpage";

export default function Layout(props) {
  return (
    <Animatedpage>
      <div className="BodyDiv">
        <main>{props.children}</main>
      </div>
    </Animatedpage>
  );
}
