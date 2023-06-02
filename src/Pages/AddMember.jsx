import React, { useState } from "react";

// axios
import axios from "axios";

// css
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

    try {
      const res = await axios.post("http://localhost:5000/Member/addMember", {
        email,
        name,
        access,
        img,
      });
      if (res.data.status) {
        console.log(res.data.status);
        setData({ name: "", email: "", img: "", access: "" });
      }
    } catch (err) {
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
            name="name"
            value={data.name}
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
            value={data.email}
            onChange={DataInp}
          />
        </div>
        <div className="addMemDept">
          <div className="addMemDeptH">Department</div>
          <select
            className="addMemDeptInput"
            name="access"
            value={data.access}
            onChange={DataInp}
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
            name="img"
            value={data.img}
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
