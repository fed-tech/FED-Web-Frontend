import React, { useEffect, useState } from "react";
import axios from "axios";
import MemCards from "./MemCards";

import viewAlumniCSS from "./css/ViewAlumni.module.css";

export default function ViewAlumni() {
  const [alumni, setAlumni] = useState([]);

  const alumniData = async () => {
    const response = await axios.get("/member/alumni");
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
