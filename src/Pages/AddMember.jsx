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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [img, setImage] = useState("");
  const [access, setAccess] = useState("");

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
            value={data.name}
            onChange={(e) => setData({ name })}
          />
        </div>
        <div className="addMemEmail">
          <div className="addMemEmailH">Member email:</div>
          <input
            className="addMemEmailInput"
            type="email"
            placeholder="Enter email id"
            value={data.email}
            onChange={(e) => setData({ email })}
          />
        </div>
        <div className="addMemDept">
          <div className="addMemDeptH">Department</div>
          <select
            className="addMemDeptInput"
            value={data.access}
            onChange={(e) => setData({ access: Number(e.target.value) })}
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
            value={data.img}
            onChange={(e) => setData({ img })}
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
