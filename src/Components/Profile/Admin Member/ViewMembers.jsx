import React, { useEffect, useState } from "react";
import MemCards from "./MemCards";
import axios from "axios";

import viewMemCSS from "./css/ViewMembers.module.css";

export default function ViewMembers() {
  const [members, setMembers] = useState([]);

  const memberData = async () => {
    const response = await axios.get("/member/");
    if (response.status === 202) {
      setMembers(response.data.users);
    } else {
      console.log("no members");
    }
  };

  useEffect(() => {
    memberData();
  }, []);

  return (
    <div className={viewMemCSS.viewMem}>
      {members.map((data) => (
        <MemCards
          key={data}
          image={data.img}
          name={data.name}
          access={data.access}
        />
      ))}
    </div>
  );
}
