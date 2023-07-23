import React, { useContext, useRef, useState } from "react";
import "./../Css/SkillHunt.css";
import PopUp1 from "./PopUp1";
import PopUp2 from "./PopUp2";
import PopUp3 from "./PopUp3";
import cancel from "./../../../../assets/SkillHunt/XCircle.png";
import axios from "axios";
import { Alert } from "./../../../../MicroInterAction/Alert";
import AuthContext from "./../../../../store/auth-context";
import Load from "./../../../../MicroInterAction/Load";

function PopUpModal({ setShowPopUp, setSuccess, setRegStatus }) {
  const [count, setCount] = useState(1);
  const [loadingEffect, setLoad] = useState(false);
  const [variants, setError] = useState({
    mainColor: "",
    secondaryColor: "",
    symbol: "",
    title: "",
    text: "",
    val: false,
  });

  const authCtx = useContext(AuthContext);

  const [info, setInfo] = useState({
    formid: "64ac549a6d7bb3846341a298",
    age: "",
    skillToTeach: "",
    socialMedia: "",
    previousEvent: "",
    gotToKnow: "",
  });

  const dataInp = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };
  const handlePrev = () => {
    setCount((prev) => prev - 1);
  };
  const { age, skillToTeach, socialMedia, previousEvent, gotToKnow } = info;
  const handleNext = () => {
    if (count === 1) {
      if (age != "" && skillToTeach != "") {
        setCount((prev) => prev + 1);
        console.log("Count->", count);
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
    } else if (count === 2) {
      if (previousEvent != "" && gotToKnow != "") {
        setCount((prev) => prev + 1);
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
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoad(true);
    // console.lxog(info);
    if (
      age != "" &&
      skillToTeach != "" &&
      previousEvent != "" &&
      gotToKnow != ""
    ) {
      try {
        console.log(info);
        const response = await axios.post("/form/register", info, {
          headers: { Authorization: `${authCtx.token}` },
        });
        // console.log("duh");
        console.log(response);
        if (response.status === 200) {
          setLoad(false);
          console.log(info);
          setSuccess(true);
          setShowPopUp(false);
          setRegStatus(true);
        }
      } catch (err) {
        setLoad(false);
        console.log(err);
        setError({
          mainColor: "#FDEDED",
          secondaryColor: "#F16360",
          symbol: "error",
          title: "Error",
          text: "An Unexpected Error Occurred",
          val: true,
        });
      }
    } else {
      setLoad(false);

      setError({
        mainColor: "#FFC0CB",
        secondaryColor: "#FF69B4",
        symbol: "pets",
        title: "Check it out",
        text: "Please Fill All The Details",
        val: true,
      });
    }
  };

  // console.log(info);
  return (
    <>
      <div id="popm">
        <div class="popmDivcontent" id="form1">
          <div class="popCOntentDiv">
            <img
              src={cancel}
              alt=""
              onClick={() => setShowPopUp(false)}
              id="CloseIcon"
            />
            <form data-multi-step class="single-form">
              {count === 1 && <PopUp1 dataInp={dataInp} info={info} />}
              {count === 2 && <PopUp3 dataInp={dataInp} info={info} />}
            </form>
            <div class="btn">
              {count > 1 && (
                <button
                  type="button"
                  data-previous
                  class="NextBtn PreviousBTnDes"
                  onClick={handlePrev}
                >
                  Previous
                </button>
              )}
              {count >= 2 && (
                <button type="button" class="NextBtn" onClick={handleSubmit}>
                  {loadingEffect ? <Load /> : "Submit"}
                </button>
              )}
              {count < 2 && (
                <button type="button" class="NextBtn" onClick={handleNext}>
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <Alert variant={variants} val={setError} />
    </>
  );
}

export default PopUpModal;
