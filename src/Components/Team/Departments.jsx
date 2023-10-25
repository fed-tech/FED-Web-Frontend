import React, { useState } from "react";

// Components
import Domain from "./Domain";

export default function Departments(props) {
  var key = 0;
  return (
    <div className="TeamCreative">
      <p className="TeamName">
        Team <span>{props.name}</span>
      </p>
      <p className="TeamNameSubTitle">{props.title}</p>
      <div id="TechnicalTeam">
        {props.data.map((data, i) => {
          key++;
          var value = (key % 4) + 1;
          return <Domain mem={data} id={value} key={i} />;
        })}
      </div>
    </div>
  );
}
