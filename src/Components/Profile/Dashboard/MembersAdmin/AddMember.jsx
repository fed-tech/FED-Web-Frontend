import React, { useContext, useState } from "react";

// axios
import axios from "axios";

//context
import AuthContext from "../../../../store/auth-context";

//css
import memberCSS from "../../../css/Profile/Dashboard/MembersAdmin/AddMember.module.css";

import Load from "../../../../MicroInterAction/Load";
import { Alert } from "../../../../MicroInterAction/Alert";

export default function AddMember() {
  const authCtx = useContext(AuthContext);
  const [savingal,setSavingAl] = useState(false);

  const [variants, setError] = useState({
    mainColor: "",
    secondaryColor: "",
    symbol: "",
    title: "",
    text: "",
    val: false,
  });

  const [data, setData] = useState({
    name: "",
    email: "",
    img: "",
    access: "",
    blur: "",
    github: "",
    linkedin: "",
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

  const handleSave = async (e) => {
    e.preventDefault();
    const { name, email, img, access, blur, github, linkedin } = data;


    if (
      name === "" ||
      email === "" ||
      access == "" ||
      img == "" ||
      blur == "" ||
      github == "" ||
      linkedin == ""
    ) {
      console.log("Please Fill All Fields");
      setError({
        mainColor: "#FDEDED",
        secondaryColor: "#F16360",
        symbol: "error",
        title: "Error",
        text: "Please fill all the fields",
        val: true,
      });
      return;
    }
    setSavingAl(true);
    try {
      const res = await axios.post(
        "/member/addMember",
        {
          email,
          name,
          access,
          img,
          blur,
          github,
          linkedin,
        },
        {
          headers: {
            Authorization: authCtx.token,
          },
        }
      );
      if (res.status===200) {
        setError({
          mainColor: "pink",
          secondaryColor: "orange",
          symbol: "check",
          title: "Success",
          text: "Member Added successfully!",
          val: true,
        });
          setData({
            name: "",
            email: "",
            img: "",
            access: "",
            blur: "",
            github: "",
            linkedin: "",
          });

          setSavingAl(false);
          window.scrollTo(0, 0);
        };
      }
     catch (err) {
      console.log(err);
      setError({
        mainColor: "lightpink",
        secondaryColor: "red",
        symbol: "Error",
        title: "Check it out",
        text: "Please fill all the details!",
        val: true,
      });
      
      // Set a delay before resetting to the initial state and hiding the success message
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
        <input
          type="text"
          placeholder="Hash ID of the image"
          name="blur"
          value={data.blur}
          onChange={DataInp}
        />
        <input
          type="text"
          placeholder="GitHub ID"
          name="github"
          value={data.github}
          onChange={DataInp}
        />
        <input
          type="text"
          placeholder="LinkedIn ID"
          name="linkedin"
          value={data.linkedin}
          onChange={DataInp}
        />
        <div className="divButton">
          <button className={memberCSS.saveBtn} onClick={handleSave}>
            {savingal ? <Load /> : "SAVE"}
          </button>
        </div>
      </form>
      <Alert variant={variants} val={setError} />
    </>
  );
}
