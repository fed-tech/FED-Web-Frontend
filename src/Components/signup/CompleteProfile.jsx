import React, { useState, useEffect, useRef, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs-react";

// Components
import Load from "./../../MicroInterAction/Load";
import { Alert } from "./../../MicroInterAction/Alert";

// axios
import axios from "axios";

// css
import CPCss from "./css/CompleteProfile.module.css";

// icons
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// state
import AuthContext from "../../store/auth-context";

function CompleteProfile(props) {
  const [loadingEffect, setLoad] = useState(false);
  const [DropShow, hideDrop] = useState(false);
  const [selected, setSelected] = useState("");
  const [showUser, setUser] = useState({
    email: "",
    Password: "",
    name: "",
    RollNumber: "",
    School: "",
    College: "",
    MobileNo: "",
    img: "",
    tandC: false,
  });
  const [variants, setError] = useState({
    mainColor: "",
    secondaryColor: "",
    symbol: "",
    title: "",
    text: "",
    val: false,
  });

  let menu = useRef();

  const authCtx = useContext(AuthContext);

  const navigate = useNavigate();

  const DataInp = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (value === "") {
      e.target.style.borderBottom = "1px solid  #FF0000";
      e.target.style.outline = "none";
    } else {
      e.target.style.borderBottom = "1px solid  black";
    }
    if (name === "MobileNo") {
      if (value.length > 12 || value.length < 10) {
        e.target.style.borderBottom = "1px solid  #FF0000";
        e.target.style.outline = "none";
      } else {
        e.target.style.borderBottom = "1px solid  black";
      }
    }

    if (name == "College") {
      if (
        "Kalinga Institute of Industrial Technology"
          .toLowerCase()
          .includes(value)
      ) {
        hideDrop(true);
      } else {
        hideDrop(false);
      }

      if (value === "") {
        hideDrop(false);
        e.target.style.borderBottom = "1px solid  #FF0000";
        e.target.style.outline = "none";
      } else {
        e.target.style.borderBottom = "1px solid  black";
      }
    }
    if (name === "tandC") {
      setUser({ ...showUser, tandC: e.target.checked });
    } else {
      setUser({ ...showUser, [name]: value });
    }
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };

  const options = [
    { value: "1st", text: "1st year" },
    { value: "2nd", text: "2nd year" },
    { value: "3rd", text: "3rd year" },
    { value: "4th", text: "4th year" },
    { value: "5th", text: "5th year" },
  ];

  useEffect(() => {
    if (DropShow) {
      document.addEventListener("mousedown", handler);
    }
  });

  const handler = (e) => {
    try {
      if (!menu.current.contains(e.target)) {
        hideDrop(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const DropCheck = () => {
    if (
      "Kalinga Institute of Industrial Technology"
        .toLowerCase()
        .includes(showUser.College)
    ) {
      console.log(` "Kalinga Institute of Industrial Technology"
      .toLowerCase()
      .includes(showUser.College)`);
      console.log(
        "Kalinga Institute of Industrial Technology"
          .toLowerCase()
          .includes(showUser.College)
      );
      hideDrop(true);
    }
  };

  const handleCreateProfile = async (e) => {
    e.preventDefault();

    const { RollNumber, School, College, MobileNo, tandC } = showUser;

    if (
      props.data.name !== "" &&
      props.data.id !== "" &&
      props.data.email !== "" &&
      props.data.picture !== "" &&
      RollNumber !== "" &&
      School !== "" &&
      College !== "" &&
      MobileNo.length === 10 &&
      tandC
    ) {
      setLoad(true);

      console.log("-------------------------");

      const password = props.data.id;

      const userObject = {
        name: props.data.name,
        email: props.data.email,
        password: password,
        img: props.data.picture,
        RollNumber,
        School,
        College,
        MobileNo,
        selected,
      };

      try {
        const response = await axios.post(`/auth/googleregister`, userObject);

        console.log("response.data.status", response.data.status);

        if (response.data.status === true) {
          authCtx.login(
            response.data.user.name,
            response.data.user.email,
            response.data.user.img,
            response.data.user.RollNumber,
            response.data.user.School,
            response.data.user.College,
            response.data.user.MobileNo,
            response.data.user.selected,
            response.data.user.regForm,
            Number(response.data.user.access),
            response.data.token,
            10800000
          );

          props.set(false);

          if (authCtx.target == "") {
            navigate("/MyProfile");
          } else {
            navigate(`/${authCtx.target}`);
            authCtx.settarget(null);
          }

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
      } catch (error) {
        console.log(error);

        setLoad(false);

        if (error.response.data.code === 1) {
          setError({
            mainColor: "#FFC0CB",
            secondaryColor: "#FF69B4",
            symbol: "pets",
            title: "Check it out",
            text: "User already exists",
            val: true,
          });
        }
        if (error.response.data.code === 2) {
          setError({
            mainColor: "#FFF4E5",
            secondaryColor: "#FFA117",
            symbol: "warning",
            title: "Warning",
            text: "Invalid email format",
            val: true,
          });
        }
      }
    } else {
      setLoad(false);

      if (MobileNo.length !== 10) {
        setError({
          mainColor: "#FFF4E5",
          secondaryColor: "#FFA117",
          symbol: "warning",
          title: "Warning",
          text: "Invalid mobile number",
          val: true,
        });
      } else {
        setError({
          mainColor: "#FFC0CB",
          secondaryColor: "#FF69B4",
          symbol: "pets",
          title: "Check it out",
          text: "Please Fill All The Details",
          val: true,
        });
      }
      if (tandC != true) {
        setError({
          mainColor: "#FFF4E5",
          secondaryColor: "#FFA117",
          symbol: "warning",
          title: "Warning",
          text: "Please accept the terms and condition",
          val: true,
        });
      }
    }
  };

  return (
    <div
      className={CPCss.mDiv}
      id={Object.keys(props.data).length > 0 ? "showCreate" : "hideCreate"}
    >
      <div className={CPCss.mDivCon}>
        <ArrowBackIcon
          className={CPCss.ArrowBackIcon}
          onClick={() => props.set(false)}
        />
        <div>
          <p className={CPCss.CreateProfile}>Create Profile</p>
          <p className={CPCss.Please}>Please enter Your Details</p>
        </div>

        <div className={CPCss.WhiteBackGround}>
          <form className={CPCss.FormTag}>
            {/* College */}
            <div ref={menu} className={CPCss.CollegeInpmDIv}>
              <input
                type="text"
                id="college"
                name="College"
                placeholder="College"
                className={CPCss.inpTag}
                value={showUser.College}
                onChange={DataInp}
                onFocus={() => {
                  DropCheck();
                }}
                spellcheck="true"
                autocomplete="off"
                required
              />
              <div
                className={CPCss.DropDownmDiv}
                id={DropShow ? "showDropMenuClg" : "hideDropMenuClg"}
                onClick={() => {
                  setUser({
                    ...showUser,
                    College: "Kalinga Institute of Industrial Technology",
                  });
                  hideDrop(false);
                }}
              >
                Kalinga Institute of Industrial Technology
              </div>
            </div>

            <div className={CPCss.rowInpDiv}>
              {/* Roll Number */}
              <input
                type="number"
                id={CPCss.widthIngTagDiv1}
                className={CPCss.inpTag}
                name="RollNumber"
                placeholder="Roll Number"
                onChange={DataInp}
              />

              {/* School */}
              <input
                type="text"
                id="school"
                className={CPCss.inpTag}
                name="School"
                placeholder="School"
                onChange={DataInp}
              />
            </div>

            {/* Phone Number */}
            <div className={CPCss.mobileno_container}>
              <p className={CPCss.mobileno91}>+91</p>
              <input
                type="number"
                id="number"
                name="MobileNo"
                placeholder="Mobile Number"
                className={CPCss.inpTag}
                onChange={DataInp}
                required
              />
            </div>

            {/* Year */}
            <select
              value={selected}
              onChange={handleChange}
              className={CPCss.year}
            >
              <option hidden>Year</option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.text}
                </option>
              ))}
            </select>

            {/* T and C */}
            <div className={CPCss.tandCDiv}>
              <input
                type="checkbox"
                name="tandC"
                id="tandC"
                checked={setUser.tandC}
                onChange={DataInp}
                required
              />
              <label htmlFor="tandC" className={CPCss.acceptLabel}>
                I agree to FED's{" "}
                <Link to="/T&C" className="LinkStyle" target="_blank">
                  Terms and Conditions
                </Link>{" "}
                and{" "}
                <Link
                  to="/PrivacyPolicies"
                  className="LinkStyle"
                  target="_blank"
                >
                  Privacy Policy
                </Link>
                .
              </label>
            </div>

            <button
              type="submit"
              className={CPCss.btn}
              onClick={handleCreateProfile}
            >
              {loadingEffect ? <Load /> : "Create Profile"}
            </button>
          </form>
        </div>
      </div>

      <Alert variant={variants} val={setError} />
    </div>
  );
}

CompleteProfile.propTypes = {};

export default CompleteProfile;
