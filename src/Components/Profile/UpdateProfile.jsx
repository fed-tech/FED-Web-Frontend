import React, { useContext, useEffect, useState } from "react";
import "./Css/UpdateModal.css";
import AuthContext from "../../store/auth-context";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function updateModal({ setShowUpdateModal }) {
  const authCtx = useContext(AuthContext);

  const navigate = useNavigate();

  const [emailerr, setEmailerr] = useState(false);
  const [passwrderr, setPasswrderr] = useState(false);
  const [firstNameerr, setfirstnameerr] = useState(false);
  const [lastnameerr, setlastNameerr] = useState(false);
  const [isinValid, setIsinValid] = useState(false);
  const [errmssg, setErrMssg] = useState("Invalid");

  const options = [
    // { value: "", text: "Year" },
    { value: "1st", text: "1st year" },
    { value: "2nd", text: "2nd year" },
    { value: "3rd", text: "3rd year" },
    { value: "4th", text: "4th year" },
    { value: "5th", text: "5th year" },
  ];

  const [showUser, setUser] = useState({
    email: authCtx.user.email,
    name: "",
    RollNumber: "",
    School: "",
    College: "",
    MobileNo: "",
  });

  const [selected, setSelected] = useState(authCtx.user.selected);

  const handleChange = (event) => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };
  const DataInp = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "name") {
      if (value === "") {
        e.target.style.borderBottom = "2px solid  #FF0000";
        e.target.style.outline = "none";
      } else {
        e.target.style.borderBottom = "2px solid  #767676";
      }
    }
    if (name === "RollNumber") {
      if (value === "") {
        e.target.style.borderBottom = "2px solid  #FF0000";
        e.target.style.outline = "none";
      } else {
        e.target.style.borderBottom = "2px solid  #767676";
      }
    }
    if (name === "School") {
      if (value === "") {
        e.target.style.borderBottom = "2px solid  #FF0000";
        e.target.style.outline = "none";
      } else {
        e.target.style.borderBottom = "2px solid  #767676";
      }
    }
    if (name === "College") {
      if (value === "") {
        e.target.style.borderBottom = "2px solid  #FF0000";
        e.target.style.outline = "none";
      } else {
        e.target.style.borderBottom = "2px solid  #767676";
      }
    }
    if (name === "MobileNo") {
      if (value === "" || value.length > 12 || value.length < 10) {
        e.target.style.borderBottom = "2px solid  #FF0000";
        e.target.style.outline = "none";
      } else {
        e.target.style.borderBottom = "2px solid  #767676";
      }
    }
    if (name === "Year") {
      if (value === "") {
        e.target.style.borderBottom = "2px solid  #FF0000";
        e.target.style.outline = "none";
      } else {
        e.target.style.borderBottom = "2px solid  #767676";
      }
    }

    setUser({ ...showUser, [name]: value });
    console.log(showUser);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const { email, name, RollNumber, School, College, MobileNo } = showUser;
    if (
      name !== "" &&
      RollNumber !== "" &&
      School !== "" &&
      College !== "" &&
      MobileNo !== "" &&
      MobileNo.length <= 12 &&
      MobileNo.length >= 10 &&
      selected !== "Year"
    ) {
      const userObject = {
        name,
        email,
        RollNumber,
        School,
        College,
        MobileNo,
        selected,
      };
      try {
        axios
          .post(`http://localhost:5000/auth/updateProfile`, userObject)
          .then((res) => {
            if (res.status === 200) {
              const resp = res.data.response;

              authCtx.update(
                resp.name,
                resp.email,
                resp.img,
                resp.RollNumber,
                resp.School,
                resp.College,
                resp.MobileNo,
                resp.selected,
                Number(resp.access)
              );

              // setShowUpdateModal(false);
              window.location.reload();
              return;
            }
          });
      } catch (error) {
        setIsinValid(true);
        if (error.response.data.code === 1) {
          setErrMssg("User already exists");
        }
        if (error.response.data.code === 2) {
          setErrMssg("Invalid email format");
        }

        console.log(error);
      }
    } else {
      if (MobileNo === "" || (MobileNo.length <= 12 && MobileNo.length >= 10)) {
        setIsinValid(true);
        setErrMssg("Please fill all the fields");
      } else {
        setIsinValid(true);
        setErrMssg("Invalid mobile number");
      }
    }
  };

  useEffect(() => {
    showUser.name = authCtx.user.name;
    showUser.RollNumber = authCtx.user.rollNo;
    showUser.MobileNo = authCtx.user.mobileNo;
    showUser.College = authCtx.user.school;
    showUser.School = authCtx.user.college;
    document.getElementById("name").setAttribute("value", authCtx.user.name);
    document
      .getElementById("rollNum")
      .setAttribute("value", authCtx.user.rollNo);
    document
      .getElementById("school")
      .setAttribute("value", authCtx.user.school);
    document
      .getElementById("college")
      .setAttribute("value", authCtx.user.college);
    document
      .getElementById("number")
      .setAttribute("value", authCtx.user.mobileNo);
  }, []);

  return (
    <div className="updateModal-overlay">
      <div className="updateModal">
        <h2>Update Profile</h2>
        <form className="update_form">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            onChange={DataInp}
            style={{
              borderBottom: lastnameerr ? "2px solid red" : "2px solid #767676",
            }}
          />
          <input
            type="text"
            id="rollNum"
            name="RollNumber"
            placeholder="Roll Number"
            onChange={DataInp}
            style={{
              borderBottom: emailerr ? "2px solid red" : "2px solid #767676",
            }}
          />
          <input
            type="text"
            id="school"
            name="School"
            placeholder="School"
            onChange={DataInp}
            style={{
              borderBottom: emailerr ? "2px solid red" : "2px solid #767676",
            }}
          />
          <input
            type="text"
            id="college"
            name="College"
            placeholder="College"
            onChange={DataInp}
            style={{
              borderBottom: emailerr ? "2px solid red" : "2px solid #767676",
            }}
          />
          <input
            type="number"
            id="number"
            name="MobileNo"
            placeholder="Mobile Number"
            onChange={DataInp}
            style={{
              borderBottom: emailerr ? "2px solid red" : "2px solid #767676",
            }}
          />
          <select
            value={selected}
            onChange={handleChange}
            className="year"
            placeholder="Year"
            id="year"
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
          <button type="submit" className="btn" onClick={handleUpdate}>
            Update Profile
          </button>
          <button
            type="button"
            className="btn"
            onClick={() => setShowUpdateModal(false)}
          >
            Close
          </button>
        </form>
      </div>
    </div>
  );
}

export default updateModal;
