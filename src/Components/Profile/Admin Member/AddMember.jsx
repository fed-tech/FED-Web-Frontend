import React, { useContext, useState } from "react";

// axios
import axios from "axios";

//context
import AuthContext from "../../../store/auth-context";

//css
import memberCSS from "./css/AddMember.module.css";

export default function AddMember() {
  const authCtx = useContext(AuthContext);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, img, access } = data;

    if (name === "" || email === "" || access == "" || img == "") {
      console.log("Please Fill All Fields");
      return;
    }
    try {
      const res = await axios.post(
        "/member/addMember",
        {
          email,
          name,
          access,
          img,
        },
        {
          headers: {
            Authorization: authCtx.token,
          },
        }
      );
      if (res.data.status) {
        console.log(res.data.status);
        setData({ name: "", email: "", img: "", access: "" });
        window.scrollTo(0, 0);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form action="" className={memberCSS.memInputs}>
        <input
          type="text"
          placeholder="Name of the member"
          name="name"
          value={data.name}
          onChange={DataInp}
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={data.email}
          onChange={DataInp}
        />
        <select name="access" value={data.access} onChange={DataInp}>
          <option value="" selected hidden>
            Select Department
          </option>
          <option value="2">Director</option>
          <option value="4">Technical</option>
          <option value="3">Creative</option>
          <option value="5">Marketing</option>
          <option value="6">Operations</option>
        </select>
        <input
          type="text"
          placeholder="Image Link"
          name="img"
          value={data.img}
          onChange={DataInp}
        />
        <div className="divButton">
          <button className={memberCSS.saveBtn} onClick={handleSubmit}>
            SAVE
          </button>
        </div>
      </form>
    </>
  );
}
