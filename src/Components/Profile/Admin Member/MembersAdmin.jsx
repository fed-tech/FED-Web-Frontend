import React, { useEffect, useState } from "react";

import memberCSS from "./css/MembersAdmin.module.css";
import AddMember from "./AddMember";
import ViewMembers from "./ViewMembers";

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
        {memNav.addMem && <AddMember />}
      </div>
    </div>
  );
}
