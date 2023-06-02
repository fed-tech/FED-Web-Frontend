import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Pages/Css/addMember.css";

export default function AddMember() {
  const [data, setData] = useState({
    name: "",
    email: "",
    img: "",
    access: "",
  });

  const DataInp = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "access") {
      setData({ ...data, [name]: Number(value) });
    } else {
      setData({ ...data, [name]: value });
    }
  };

  const handleSubmit = async () => {
    const { name, email, img, access } = data;

    if (name === "" || email === "" || access == "" || img == "") {
      console.log("Please Fill All Departments");
      return;
    }

    console.log(name);
    console.log(email);
    console.log(img);
    console.log(access);

    // try {
    //   const res = await axios.post("http://localhost:5000/Member/addMember", {
    //     email,
    //     name,
    //     access,
    //     img,
    //   });
    //   setName("");
    //   setEmail("");
    //   setAccess("");
    //   setImage("");
    //   console.log(res);
    // } catch (err) {
    //   setName("");
    //   setEmail("");
    //   setAccess("");
    //   setImage("");
    //   console.log(err.response.data);
    // }
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
            name="name"
            onChange={DataInp}
          />
        </div>
        <div className="addMemEmail">
          <div className="addMemEmailH">Member email:</div>
          <input
            className="addMemEmailInput"
            type="email"
            placeholder="Enter email id"
            name="email"
            onChange={DataInp}
          />
        </div>
        <div className="addMemDept">
          <div className="addMemDeptH">Department</div>
          <select className="addMemDeptInput" name="access" onChange={DataInp}>
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
            name="img"
            onChange={DataInp}
          />
        </div>
        <div className="addMemButton">
          <button type="button" onClick={handleSubmit}>
            ADD MEMBER
          </button>
        </div>
      </div>
    </div>
  );
}
