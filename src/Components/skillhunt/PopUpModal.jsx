import React, { useRef, useState } from "react";
import "../../Pages/Css/SkillHunt.css";
import PopUp1 from "./PopUp1";
import PopUp2 from "./PopUp2";
import PopUp3 from "./PopUp3";
import cancel from "../../assets/SkillHunt/XCircle.png";
import axios from "axios";

function PopUpModal({ setShowPopUp,setSuccess }) {
  const [count, setCount] = useState(1);
  
  const [info, setInfo] = useState({
    firstName: "",
    lastName: "",
    ContactNumber: "",
    age: "",
    email: "",
    skillToTeach: "",
    insta: "",
    school: "",
    branch: "",
    year: "",
    department: "",
    experience: "",
    society: "",
    KnowEventFirstTeam: "",
    WhichOneTeam: "",
  });
  const dataInp = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };
  const handlePrev = () => {
    setCount((prev) => prev - 1);
  };
  const {firstName,lastName,ContactNumber,age,email,skillToTeach,insta,school,branch,year,department,experience,society,KnowEventFirstTeam,WhichOneTeam} = info;
  const handleNext = () => {
    if (
      count === 1 &&
      firstName != "" &&
      lastName != "" &&
      ContactNumber != "" &&
      age != "" &&
      email != "" &&
      skillToTeach != "" &&
      insta != "" &&
      school != ""
    ) {
      setCount((prev) => prev + 1);
      console.log("Count->", count);
    } else if (
      count === 2 &&
      branch != "" &&
      year != "" &&
      department != "" &&
      experience != "" &&
      society != ""
    ) {
      setCount((prev) => prev + 1);
    } else if (
      count === 3 &&
      KnowEventFirstTeam != "" &&
      WhichOneTeam != ""
    ) {
      setCount((prev) => prev + 1);
    }
  };

  const handleSubmit = async() => {
    e.preventDefault();
    if(firstName != "" && lastName != "" && ContactNumber != "" &&age != "" &&email != "" && skillToTeach != "" &&insta != "" && school != "" &&branch != "" && year != "" && department != "" && experience != "" && society != "" && KnowEventFirstTeam != "" && WhichOneTeam != "")
    {
        try{
            const response = await axios.post("/",info);
            if(response.status === 200)
            {
                setSuccess(true);
                setShowPopUp(false);

            }
    
        }catch(err)
        {
            console.log(err)
        }


    }
  };

  console.log(info);
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
              {count === 1 && (
                <PopUp1 dataInp={dataInp} info={info} />
              )}
              {count === 2 && <PopUp2 dataInp={dataInp} info={info} />}
              {count === 3 && <PopUp3 dataInp={dataInp} info={info} />}
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
              {count >= 3 && (
                <button type="button" class="NextBtn" onClick={handleSubmit}>
                  Submit
                </button>
              )}
              {count < 3 && (
                <button type="button" class="NextBtn" onClick={handleNext}>
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PopUpModal;
