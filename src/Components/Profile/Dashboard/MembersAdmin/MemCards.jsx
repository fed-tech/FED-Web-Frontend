import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

import memCardCSS from "../../../css/Profile/Dashboard/MembersAdmin/MemCards.module.css";
import AuthContext from "../../../../store/auth-context";

export default function MemCards(props) {
  const [dept, setDept] = useState("");

  const authCtx = useContext(AuthContext);

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
    if (props.access == "7") {
      setDept("Alumni");
    }
  }, []);

  const deleteHandler = async () => {
    const response = await axios.post(
      "/member/delMember",
      {
        user: authCtx.user.email,
        email: props.email,
      },
      { headers: { Authorization: authCtx.token } }
    );
    if (response.status === 200) {
      props.isMember ? props.memberData() : props.alumniData();
    } else {
      console.log("no members");
    }
  };

  const alumniHandler = async () => {
    const response = await axios.post(
      "/member/addAlumni",
      {
        email: props.email,
      },
      { headers: { Authorization: authCtx.token } }
    );
    if (response.status === 200) {
      props.memberData();
    } else {
      console.log("no members");
    }
  };

  return (
    <div className={memCardCSS.card}>
      <div className={memCardCSS.memImg}>
        <img src={props.image} alt="" />
      </div>
      <div className={memCardCSS.memContent}>
        <h3>{props.name}</h3>
        <h5>{dept}</h5>
        <div
          className={memCardCSS.memButton}
          style={{
            justifyContent: props.isMember ? "space-between" : "center",
          }}
        >
          {props.isMember && (
            <button onClick={alumniHandler}>Make Alumni</button>
          )}
          <button onClick={deleteHandler}>Delete</button>
        </div>
      </div>
    </div>
  );
}
