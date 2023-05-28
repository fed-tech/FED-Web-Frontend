import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Pages/Css/addMember.css";

export default function AddMember() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  //   const [dept, setDept] = useState("");
  const [img, setImage] = useState("");
  const [access, setAccess] = useState("");
  const [error, setError] = useState("");
  const [initialize, setInitialize] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === "") {
      console.log("please enter name");
      return;
    }
    if (email === "") {
      console.log("please enter email");
      return;
    }
    if (access === "") {
      console.log("please enter department");
      return;
    }
    if (img === "") {
      console.log("please enter image");
      return;
    }

    // if (dept === "director") {
    //   setAccess(2);
    // } else if (dept === "creative") {
    //   setAccess(3);
    // } else if (dept === "technical") {
    //   setAccess(4);
    // } else if (dept === "marketing") {
    //   setAccess(5);
    // } else if (dept === "operations") {
    //   setAccess(6);
    // }

    console.log(access);
    try {
      const res = await axios.post("http://localhost:5000/Member/addMember", {
        email,
        name,
        access,
        img,
      });
      setName("");
      setEmail("");
      setAccess("");
      setImage("");
      console.log(res);
    } catch (err) {
      setName("");
      setEmail("");
      setAccess("");
      setImage("");
      console.log(err.response.data);
    }
  };

  return (
    <div className="addMember">
      <div className="addMemberInner">
        <div className="addMemName">
          <div className="addMemNameH">Member name:</div>
          <input
            className="addMemNameInput"
            type="text"
            placeholder="Enter member name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="addMemEmail">
          <div className="addMemEmailH">Member email:</div>
          <input
            className="addMemEmailInput"
            type="email"
            placeholder="Enter email id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="addMemDept">
          <div className="addMemDeptH">Department</div>
          <select
            className="addMemDeptInput"
            value={access}
            onChange={(e) => setAccess(Number(e.target.value))}
          >
            <option value="" hidden>
              Select Department
            </option>
            <option value="2" className="addMemDeptO">
              Director
            </option>
            <option value="4" className="addMemDeptO">
              Technical
            </option>
            <option value="3" className="addMemDeptO">
              Creative
            </option>
            <option value="5" className="addMemDeptO">
              Marketing
            </option>
            <option value="6" className="addMemDeptO">
              Operations
            </option>
          </select>
        </div>
        <div className="addMemImage">
          <div className="addMemImageH">Member Image:</div>
          <input
            className="addMemImageInput"
            type="text"
            placeholder="Enter image link"
            value={img}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="addMemButton">
          <button type="submit" onClick={handleSubmit}>
            ADD MEMBER
          </button>
        </div>
      </div>
    </div>
  );
}
