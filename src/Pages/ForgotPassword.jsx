import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// css
import "./Css/forgotpass.css";

// axios
import axios from "axios";

// Components
import Load from "./../MicroInterAction/Load";
import { Alert } from "./../MicroInterAction/Alert";

function ForgotPassword() {
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const [showBtn, setShowBtn] = useState(false);
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

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setLoad(true);

    if (email === "") {
      setLoad(false);

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

    try {
      const res = await axios.post("/auth/sendotp", {
        email,
      });

      console.log(res);

      if (res.status === 200) {
        setShowBtn(true);
        setLoad(false);

        setError({
          mainColor: "#EDFEEE",
          secondaryColor: "#5CB660",
          symbol: "check_circle",
          title: "Success",
          text: "Please check your mail !",
          val: true,
        });
      }
    } catch (err) {
      console.log(err);

      if (err.response.status === 401) {
        setLoad(false);

        setError({
          mainColor: "#FFF4E5",
          secondaryColor: "#FFA117",
          symbol: "warning",
          title: "Warning",
          text: "Email does not exist.",
          val: true,
        });
        return;
      } else {
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
    }
  };

  const handleConfirmOtp = async (e) => {
    e.preventDefault();
    setLoad(true);

    console.log(email);

    if (email === "") {
      setLoad(false);

      setError({
        mainColor: "#FFC0CB",
        secondaryColor: "#FF69B4",
        symbol: "pets",
        title: "Check it out",
        text: "Please Fill All The Details",
        val: true,
      });
      return;
    } else if (otp === "") {
      setLoad(false);

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

    try {
      const res = await axios.post("/auth/validate", {
        email,
        otp,
      });

      if (res.status === 200) {
        setLoad(false);

        setError({
          mainColor: "#EDFEEE",
          secondaryColor: "#5CB660",
          symbol: "check_circle",
          title: "Success",
          text: "OTP Verified successfully",
          val: true,
        });

        localStorage.setItem("Email", email);
        navigate("/resetpassword");
      }
    } catch (err) {
      console.log(err);

      if (err.response.status === 401) {
        setLoad(false);

        setError({
          mainColor: "#FFF4E5",
          secondaryColor: "#FFA117",
          symbol: "warning",
          title: "Warning",
          text: "Email does not exist.",
          val: true,
        });
      } else if (err.response.status === 403) {
        setLoad(false);

        setError({
          mainColor: "#FFF4E5",
          secondaryColor: "#FFA117",
          symbol: "warning",
          title: "Warning",
          text: "Incorrect OTP.",
          val: true,
        });
      } else {
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
    }
  };

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
                {loadingEffect ? <Load /> : "Send OTP"}
              </button>
            )}
            {showBtn && (
              <button className="logtwo1" onClick={handleConfirmOtp}>
                {loadingEffect ? <Load /> : "Verify OTP"}
              </button>
            )}
          </div>
        </div>
      </div>

      <Alert variant={variants} val={setError} />
    </>
  );
}

export default ForgotPassword;
