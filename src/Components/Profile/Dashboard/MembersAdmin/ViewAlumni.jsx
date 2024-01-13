import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import MemCards from "./MemCards";

import viewAlumniCSS from "../../../css/Profile/Dashboard/MembersAdmin/ViewAlumni.module.css";
import AuthContext from "../../../../store/auth-context";

export default function ViewAlumni({showAlumni}) {
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
  }, [showAlumni]);

  return (
    // <div className={viewAlumniCSS.viewMem}>
    //   {alumni.map((data) => (
    //     <MemCards
    //       key={data}
    //       image={data.img}
    //       name={data.name}
    //       access={data.access}
    //       isMember={false}
    //       email={data.email}
    //       alumniData={alumniData}
    //     />
    //   ))}
    // </div>
    <div className={viewAlumniCSS.viewMem}>
  {showAlumni ? (
    <div className="viewMem">
      <ViewAlumni />
    </div>
  ) : (
    <div className="viewMem">
      {alumni.length === 0 ? (
        <div style={{ marginLeft: "20%" }}>
          <h2>No Alumni Found</h2>
        </div>
      ) : (
        alumni.map((data) => (
          <MemCards
            key={data}
            image={data.img}
            name={data.name}
            access={data.access}
            isMember={false}
            email={data.email}
            alumniData={alumniData}
          />
        ))
      )}
    </div>
  )}
</div>
  );
}
