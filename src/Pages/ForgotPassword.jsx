import React, { useEffect, useState } from "react";
import "../Pages/Css/forgotpass.css";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [showBtn, setShowBtn] = useState(false);
  const [err, setErr] = useState("Invalid");
  const handleSendOtp = async (e) => {
    e.preventDefault();
    if (email === "") {
      setErr("Please enter the email");
      return;
    }
    try {
      const res = await axios.post("http://localhost:5000/auth/sendotp", {
        email,
      });

      console.log(res);
      if (res.status === 200) {
        Swal.fire({
          title: "OTP Sent",
          text: "Please check your mail",
          icon: "success",
          confirmButtonText: "ok",
          confirmButtonColor: "#f45725",
        });
        setShowBtn(true);
      }
    } catch (err) {
      if (err.response.status === 401) {
        setErr("Email does not exist");
        return;
      }
      console.log(err);
    }
  };
  const handleConfirmOtp = async (e) => {
    e.preventDefault();
    console.log(email);
    if (email === "") {
      setErr("Please enter the email");
      return;
    } else if (otp === "") {
      setErr("Please enter the otp");
      return;
    }
    try {
      const res = await axios.post("http://localhost:5000/auth/validate", {
        email,
        otp,
      });

      if (res.status === 200) {
        Swal.fire({
          title: "OTP Verified successfully",
          icon: "success",
          confirmButtonText: "ok",
          confirmButtonColor: "#f45725",
        });
        localStorage.setItem("Email", email);
        navigate("/resetpassword");
      }
    } catch (err) {
      if (err.response.status === 401) {
        setErr("Email Invalid");
      } else if (err.response.status === 403) {
        setErr("Incorrect OTP");
      }
      console.log(err);
    }
  };
  useEffect(() => {
    setErr("Invalid");
  }, [email, otp]);
  return (
    <div className="full-page">
      <div className="insidebox">
        <div className="title2">
          <p className="fed">FED</p>
        </div>
        <div className="whitebox1">
          <div className="hellopart1">
            <p className="welc1">Forgot Password</p>
          </div>
          <div className="user">
            <input
              type="text"
              placeholder="Email"
              className="username1"
              onChange={(e) => setEmail(e.target.value)}
              //   style={{
              //     borderBottom: emailerr ? "2px solid red" : "2px solid black",
              //   }}
            />
            {showBtn && (
              <input
                type="password"
                placeholder="Enter OTP"
                className="username1"
                onChange={(e) => setOtp(e.target.value)}
                //   style={{
                //     borderBottom: emailerr ? "2px solid red" : "2px solid black",
                //   }}
              />
            )}
          </div>
          {!showBtn && (
            <button className="logtwo1" onClick={handleSendOtp}>
              Send OTP
            </button>
          )}
          {showBtn && (
            <button className="logtwo1" onClick={handleConfirmOtp}>
              Verify OTP
            </button>
          )}
          <p
            id="errmssg1"
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
