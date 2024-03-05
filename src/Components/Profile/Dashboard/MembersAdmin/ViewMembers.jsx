import React, { useContext, useEffect, useState } from "react";
import MemCards from "./MemCards";
import axios from "axios";

import viewMemCSS from "../../../css/Profile/Dashboard/MembersAdmin/ViewMembers.module.css";
import AuthContext from "../../../../store/auth-context";

export default function ViewMembers({ showMembers }) {
  const [members, setMembers] = useState([]);
  const authCtx = useContext(AuthContext);

  const memberData = async () => {
    const response = await axios.get("/member/", {
      headers: { Authorization: authCtx.token },
    });
    if (response.status === 202) {
      setMembers(response.data.users);
    } else {
    }
  };

  useEffect(() => {
    memberData();
  }, [showMembers]);

  return (
    <div className={viewMemCSS.viewMem}>
      {showMembers ? (
        <div className={viewMemCSS.viewMem}>
          <ViewMembers />
        </div>
      ) : (
        members.length === 0 ? (
          <div style={{ marginLeft: "20%" }}>
            <h2>No Members Found</h2>
          </div>
        ) : (
          members.map((data) => (
            <MemCards
              key={data}
              image={data.img}
              name={data.name}
              access={data.access}
              isMember={true}
              email={data.email}
              memberData={memberData}
            />
          ))
        )
      )}
    </div>
  );
}
