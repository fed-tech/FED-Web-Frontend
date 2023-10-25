import React, { useEffect, useState } from "react";

import memberCSS from "../../../css/Profile/Dashboard/MembersAdmin/MembersAdmin.module.css";

import ViewMembers from "./ViewMembers";
import ViewAlumni from "./ViewAlumni";
import AddMember from "./AddMember";

export default function MembersAdmin() {
  const [memNav, setMemNav] = useState({
    viewMem: true,
    viewAlumni: false,
    addMem: false,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={memberCSS.memMainDiv}>
      <div className={memberCSS.memNav}>
        <div
          style={{
            color: memNav.viewMem ? "#f45725" : "white",
            cursor: "pointer",
          }}
          onClick={() => {
            setMemNav({ viewMem: true, viewAlumni: false, addMem: false });
          }}
        >
          View Members
        </div>
        <div
          style={{
            color: memNav.viewAlumni ? "#f45725" : "white",
            cursor: "pointer",
          }}
          onClick={() => {
            setMemNav({ viewMem: false, viewAlumni: true, addMem: false });
          }}
        >
          View Alumni
        </div>
        <div
          style={{
            color: memNav.addMem ? "#f45725" : "white",
            cursor: "pointer",
          }}
          onClick={() => {
            setMemNav({ viewMem: false, viewAlumni: false, addMem: true });
          }}
        >
          Add Members
        </div>
      </div>
      <div className={memberCSS.content}>
        {memNav.viewMem && <ViewMembers />}
        {memNav.viewAlumni && <ViewAlumni />}
        {memNav.addMem && <AddMember />}
      </div>
    </div>
  );
}
