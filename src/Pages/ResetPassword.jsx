import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs-react";

// css
import "./Css/resetpass.css";

// axios
import axios from "axios";

// Components
import Load from "./../MicroInterAction/Load";
import { Alert } from "./../MicroInterAction/Alert";

function ForgotPassword() {
  const [err, setErr] = useState("Invalid");
  const [newPass, setNewPass] = useState("");
  const [cnfPass, setCnfPass] = useState("");
  const [loadingEffect, setLoad] = useState(false);
  const [variants, setError] = useState({
    mainColor: "",
    secondaryColor: "",
    symbol: "",
    title: "",
    text: "",
    val: false,
  });

  const navigate = useNavigate();

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setLoad(true);

    if (cnfPass === "" || newPass === "") {
      setError({
        mainColor: "#FFC0CB",
        secondaryColor: "#FF69B4",
        symbol: "pets",
        title: "Check it out",
        text: "Please Fill All The Details",
        val: true,
      });
      return;
    }

    const email = localStorage.getItem("Email");
    const passwrd = cnfPass;

    const password = bcrypt.hashSync(passwrd, import.meta.env.VITE_BCRYPT);

    try {
      if (cnfPass === newPass) {
        const res = await axios.post("/auth/changepassword", {
          email,
          password,
        });
        if (res.status === 200) {
          setLoad(false);

          setError({
            mainColor: "#EDFEEE",
            secondaryColor: "#5CB660",
            symbol: "check_circle",
            title: "Success",
            text: "Password reset successfully !!",
            val: true,
          });

          localStorage.removeItem("Email");
          navigate("/Login");
        }
      } else {
        setLoad(false);

        setError({
          mainColor: "#FFF4E5",
          secondaryColor: "#FFA117",
          symbol: "warning",
          title: "Warning",
          text: "Please enter correct password.",
          val: true,
        });
      }
    } catch (err) {
      console.log(err);

      setLoad(false);

      setError({
        mainColor: "#FDEDED",
        secondaryColor: "#F16360",
        symbol: "error",
        title: "Error",
        text: "An Unexpected Error Occured",
        val: true,
      });
    }
  };

  return (
    <>
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
              />
              <input
                type="password"
                placeholder="Confirm password"
                className="username3"
                onChange={(e) => setCnfPass(e.target.value)}
              />
            </div>
            <button className="logtwo3" onClick={handleChangePassword}>
              {loadingEffect ? <Load /> : "Change Password"}
            </button>
          </div>
        </div>
      </div>

      <Alert variant={variants} val={setError} />
    </>
  );
}

export default ForgotPassword;
