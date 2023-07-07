import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// css
import "./Css/forgotpass.css";

// axios
import axios from "axios";

// Components
import { Alert } from "./../MicroInterAction/Alert";

function ForgotPassword() {
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const [err, setErr] = useState("Invalid");
  const [showBtn, setShowBtn] = useState(false);
  const [variants, setError] = useState({
    mainColor: "",
    secondaryColor: "",
    symbol: "",
    title: "",
    text: "",
    val: false,
  });
  const navigate = useNavigate();

  const handleSendOtp = async (e) => {
    e.preventDefault();

    if (email === "") {
      setErr("Please enter the email");
      return;
    }
    try {
      const res = await axios.post("/auth/sendotp", {
        email,
      });

      console.log(res);

      if (res.status === 200) {
        Swal.fire({
          title: "OTP Sent",
          text: "Please check your mail",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#f45725",
          background: "black",
          color: "white",
          customClass: {
            text: "my-text-class",
            title: "my-title-class",
          },
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
      const res = await axios.post("/auth/validate", {
        email,
        otp,
      });

      if (res.status === 200) {
        Swal.fire({
          title: "OTP Verified successfully",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#f45725",
          background: "black",
          color: "white",
          customClass: {
            title: "my-title-class",
          },
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
    <>
      <div className="full-page">
        <div className="insidebox">
          <div className="title2">
            <p className="FED">FED</p>
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
              />
              {showBtn && (
                <input
                  type="password"
                  placeholder="Enter OTP"
                  className="username1"
                  onChange={(e) => setOtp(e.target.value)}
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

      <Alert variant={variants} val={setError} />
    </>
  );
}

export default ForgotPassword;
