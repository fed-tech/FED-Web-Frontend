import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

// Components
import Load from "./../../MicroInterAction/Load";
import { Alert } from "./../../MicroInterAction/Alert";

// css
import CPCss from "./css/CompleteProfile.module.css";

// icons
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

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
    setUser({ ...showUser, [name]: value });
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

    console.log("name -> " + props.data.name);
    console.log("Password -> " + props.data.id);
    console.log("email -> " + props.data.email);
    console.log("picture -> " + props.data.picture);

    const { RollNumber, School, College, MobileNo } = showUser;

    if (
      props.data.name !== "" &&
      props.data.id !== "" &&
      props.data.email !== "" &&
      props.data.picture !== "" &&
      RollNumber !== "" &&
      School !== "" &&
      College !== "" &&
      MobileNo.length === 10
    ) {
      const password = bcrypt.hashSync(
        props.data.id,
        "$2b$10$Q0RPeouqYdTToq76zoccIO"
      );

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
    } else {
      if (MobileNo.length !== 10) {
        setErrMssg("Please fill all the fields");
      } else {
        setErrMssg("Invalid mobile number");
      }
    }

    //   try {
    //     const response = await axios.post(
    //       `http://localhost:5000/auth/googleregister`,
    //       userObject
    //     );
    //     if (response.status === 202) {
    //       authCtx.login(
    //         response.data.user.name,
    //         response.data.user.email,
    //         response.data.user.img,
    //         response.data.user.RollNumber,
    //         response.data.user.School,
    //         response.data.user.College,
    //         response.data.user.MobileNo,
    //         response.data.user.selected,
    //         Number(response.data.user.access),
    //         response.data.token,
    //         10800000
    //       );
    //       navigate("/MyProfile");

    //       return;
    //     }
    //   } catch (error) {
    //     setIsinValid(true);
    //     if (error.response.data.code === 1) {
    //       setErrMssg("User already exists");
    //     }
    //     if (error.response.data.code === 2) {
    //       setErrMssg("Invalid email format");
    //     }

    //     console.log(error);
    //   }
    // } else {
    //   if (MobileNo === "" || (MobileNo.length <= 12 && MobileNo.length >= 10)) {
    //     setIsinValid(true);
    //     setErrMssg("Please fill all the fields");
    //   } else {
    //     setIsinValid(true);
    //     setErrMssg("Invalid mobile number");
    //   }
    // }
  };

  return (
    <div
      className={CPCss.mDiv}
      // id="showCreate"
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
    </div>
  );
}

CompleteProfile.propTypes = {};

export default CompleteProfile;
