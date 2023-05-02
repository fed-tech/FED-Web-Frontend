import React from "react";

// Components
import Domain from "./Domain";

export default function Departments(props) {
  return (
    <div className="TeamCreative">
      <p className="TeamName">
        Team <span>{props.name}</span>
      </p>
      <p className="TeamNameSubTitle">{props.title}</p>
      <div id="TechnicalTeam">
        {props.data.map((data, i) => (
          <Domain mem={data} key={i} />
        ))}
      </div>
    </div>
  );
}
