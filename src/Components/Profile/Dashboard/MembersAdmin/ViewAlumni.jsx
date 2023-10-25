import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import MemCards from "./MemCards";

import viewAlumniCSS from "../../../css/Profile/Dashboard/MembersAdmin/ViewAlumni.module.css";
import AuthContext from "../../../../store/auth-context";

export default function ViewAlumni() {
  const [alumni, setAlumni] = useState([]);
  const authCtx = useContext(AuthContext);

  const alumniData = async () => {
    const response = await axios.get("/member/alumni", {
      headers: { Authorization: authCtx.token },
    });
    if (response.status === 202) {
      setAlumni(response.data.users);
    } else {
      console.log("no alumni");
    }
  };

  useEffect(() => {
    alumniData();
  }, []);

  return (
    <div className={viewAlumniCSS.viewMem}>
      {alumni.map((data) => (
        <MemCards
          key={data}
          image={data.img}
          name={data.name}
          access={data.access}
          isMember={false}
          email={data.email}
          alumniData={alumniData}
        />
      ))}
    </div>
  );
}
