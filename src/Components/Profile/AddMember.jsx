import React from "react";

import memberCSS from "../Profile/cssp/AddMember.module.css";

export default function AddMember() {
  return (
    <>
      <div className={memberCSS.heading}>
        <h1>ADD MEMBER</h1>
      </div>
      <form action="" className={memberCSS.memInputs}>
        <input type="text" placeholder="Name of the member" />
        <input type="text" placeholder="Access" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Image Link" />
        <div className="divButton">
          <button className={memberCSS.saveBtn}>SAVE</button>
        </div>
      </form>
    </>
  );
}
