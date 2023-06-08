import React, { useState, useEffect } from "react";
import "../Pages/Css/resetpass.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs-react";

import axios from "axios";

function ForgotPassword() {
  const navigate = useNavigate();
  const [newPass, setNewPass] = useState("");
  const [cnfPass, setCnfPass] = useState("");
  const [err, setErr] = useState("Invalid");
  const handleChangePassword = async (e) => {
    e.preventDefault();
    if (cnfPass === "" || newPass === "") {
      setErr("Please fill all the fields");
      return;
    }
    const email = localStorage.getItem("Email");
    const passwrd = cnfPass;
    const password = bcrypt.hashSync(passwrd, "$2b$10$Q0RPeouqYdTToq76zoccIO");
    try {
      if (cnfPass === newPass) {
        const res = await axios.post(
          "http://localhost:5000/auth/changepassword",
          { email, password }
        );
        if (res.status === 200) {
          Swal.fire({
            title: "Password reset successfully",
            // text: "Please check your mail",
            icon: "success",
            confirmButtonText: "OK",
            confirmButtonColor: "#f45725",
            background: "black",
            color: "white",
            customClass: {
              title: "my-title-class",
            },
          });
          localStorage.removeItem("Email");
          navigate("/Login");
        }
      } else {
        setErr("Please enter correct password");
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    setErr("Invalid");
  }, [newPass, cnfPass]);
  return (
    <div className="full3">
      <div className="inside3">
        <div className="title3">
          <p className="fed">FED</p>
        </div>
        <div className="whitebox3">
          <div className="hellopart3">
            <p className="welc3">Reset Password</p>
          </div>
          <div className="user3">
            <input
              type="password"
              placeholder="New password"
              className="username3"
              onChange={(e) => setNewPass(e.target.value)}
              //   style={{
              //     borderBottom: emailerr ? "2px solid red" : "2px solid black",
              //   }}
            />
            <input
              type="password"
              placeholder="Confirm password"
              className="username3"
              onChange={(e) => setCnfPass(e.target.value)}
              //   style={{
              //     borderBottom: emailerr ? "2px solid red" : "2px solid black",
              //   }}
            />
          </div>
          <button className="logtwo3" onClick={handleChangePassword}>
            Change Password
          </button>
          <p
            id="errmssg3"
            style={{ color: err !== "Invalid" ? "red" : "white" }}
          >
            {err}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
