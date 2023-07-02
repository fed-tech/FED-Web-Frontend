import React, { useEffect, useState } from "react";

import memCardCSS from "./css/MemCards.module.css";

export default function MemCards(props) {
  const [dept, setDept] = useState("");
  useEffect(() => {
    if (props.access == "0") {
      setDept("Admin");
    }
    if (props.access == "2") {
      setDept("Director");
    }
    if (props.access == "3") {
      setDept("Creative Team");
    }
    if (props.access == "4") {
      setDept("Technical Team");
    }
    if (props.access == "5") {
      setDept("Marketing Team");
    }
    if (props.access == "6") {
      setDept("Operations Team");
    }
  }, []);
  return (
    <div className={memCardCSS.card}>
      <div className={memCardCSS.memImg}>
        <img src={props.image} alt="" />
      </div>
      <div className={memCardCSS.memContent}>
        <h3>{props.name}</h3>
        <h5>{dept}</h5>
        <div className={memCardCSS.memButton}>
          <button>Make Alumni</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
}
