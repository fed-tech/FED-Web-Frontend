import React, { useState, useEffect, useContext } from "react";
import "../../css/Events/regForm.css";
// import formData from './formElements.json';
import FormField from "./formField";
import cancel from "../../../assets/SkillHunt/XCircle.svg";
import Switch from "react-switch";
import Load from "../../../MicroInterAction/Load";
import axios from "axios";
import AuthContext from "../../../store/auth-context";
import { QRCodeSVG } from "qrcode.react";
import { useNavigate } from "react-router-dom";
import { func } from "prop-types";
export default function RegForm({
  showPopUp,
  setShowPopUp,
  setError,
  formid,
  formelement,
  formName,
}) {
  const authCtx = useContext(AuthContext);
  const [limit, setLimit] = useState(3);
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [isCreatingTeam, setIsCreatingTeam] = useState(false);
  const [submission, setSubmission] = useState({});
  const [teamleadermail, setTeamleadermail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [showFields, setShowFields] = useState(true);
  const [image, setImage] = useState("");
  var formData = formelement;
  var showTeam = formData.isTeam;
  var isPaid = formData.amount != 0;
  const navigate = useNavigate();
  function validateInput() {
    const checkboxFields = formData.formelement.filter(
      (field) => field.type === "checkbox"
    );
    const checkboxValid =
      checkboxFields.length === 0 ||
      checkboxFields.some((field) => {
        const selectedOptions =
          submission[field.name] &&
          Object.values(submission[field.name]).filter(Boolean);
        return selectedOptions && selectedOptions.length >= 1 && selectedOptions.length <= 3;
      });
      
      return (
        formData.formelement.slice(count, count + limit).every((e) => {
          if (e.type === "checkbox") {
            return checkboxValid;
          } else {
            if (!submission[[e.name]] && e.required) {
              return false;
            }
          }
          return true;
        })
      );
  }
  const handleNext = () => {
    var validationerror = validateInput();
    if (!validationerror) {
      setError({
        mainColor: "#FFC0CB",
        secondaryColor: "#FF69B4",
        symbol: "pets",
        title: "Check it out",
        text: "Please Fill All The Details",
        val: true,
      });
    }
    !validationerror || setCount((prevCount) => prevCount + limit);
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    if (name == "txnid") {
      return setSubmission({ ...submission, [name]: value.substring(0, 4) });
    }
    setSubmission({ ...submission, [name]: value });
  };

  const handlePrev = () => {
    if (showPayment) {
      setShowFields(true);
      setShowPayment(false);
    } else {
      setCount((prevCount) => Math.max(prevCount - limit, 0));
    }
  };
  var visibleFields = [];
  formData.formelement.slice(count, count + limit).map((field, idx) => {
    visibleFields.push(
      <FormField
        key={count + idx}
        {...field}
        count={count}
        setCount={setCount}
        submission={submission}
        setSubmission={setSubmission}
      />
    );
  });
  const handleToggle = (e) => {
    setMessage("");
    setIsVerified(!e);
    setIsCreatingTeam(!e);
  };
  const handleVerify = async () => {
    setIsLoading(true);
    try {
      var result = await axios.get(
        `/form/verifyleader?teamleadermail=${teamleadermail}&formid=${formid}`,
        {
          headers: {
            Authorization: authCtx.token,
          },
        }
      );
      if (result.status == 200) {
        if (result.data.validation) {
          setIsVerified(true);
          setSubmission({
            ...submission,
            teamleader: teamleadermail,
            teamname: result.data.message,
          });
          setMessage(
            "Verification Successfull,Your team name is " + result.data.message
          );
        } else {
          setIsVerified(false);
          setMessage("Verification Failed");
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleTeam = (e) => {
    setSubmission({
      ...submission,
      teamleader: authCtx.user.email,
      teamname: e.target.value,
    });
  };
  const handleTeamleader = (e) => {
    setTeamleadermail(e.target.value);
  };

  const Teampage = (
    <div>
      <div
        className="teamDiv"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="teamHead">
          <label>Create Team</label>
          <Switch
            className="toggle"
            onChange={handleToggle}
            checked={!isCreatingTeam}
            checkedIcon={false}
            uncheckedIcon={false}
            onColor="#f45725;"
            offColor="#f45725;"
          ></Switch>
          <label>Join Team</label>
        </div>
        <div className="team">
          {isCreatingTeam ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <label htmlFor="teamName">Team Name</label>
              <input
                className="teamcreate"
                type="text"
                name="teamName"
                id="teamName"
                onChange={handleTeam}
                value={submission.teamname}
              />
            </div>
          ) : (
            <div className="jointeam">
              <label htmlFor="teamEmail">Team leader's Email</label>
              <div className="teamjoin">
                <input
                  type="text"
                  name="teamName"
                  id="teamName"
                  onChange={handleTeamleader}
                  value={teamleadermail}
                />
                <button className="verifybtn" onClick={handleVerify}>
                  {isLoading ? <Load /> : "Verify"}
                </button>
              </div>
              {!isLoading && (
                <p className={`message ${isVerified ? "" : "message-failed"}`}>
                  {message}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
  //Converts image to base64 format
  function convertToBase64(e){
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setImage(reader.result);
    }
    reader.onerror = error => {
      console.log("Error: ",error);
    }
  }
  const Paymentpage = (
    <div>
      <div className="paymentMain fontDets">
        <label>
          Kindly Pay ₹{formData.amount} to the below QR Code thorugh any payment
          provider. After the transaction is completed, Provide Us the last four
          digit of the transaction ID received by you
        </label>
        <div className="qrcode">
          <QRCodeSVG
            value={`upi://pay?pa=${formData.upi}&am=${formData.amount}&cu=INR`}
            level={"H"}
          />
        </div>
        <input
          type="number"
          name="txnid"
          min={0}
          id="teamName"
          onChange={onChange}
          value={submission.txnid}
          placeholder="Last Four Digit Of Txn ID"
        />
         <label
            for="txnImg"
            class="txnImgLabel">
          Upload transaction Completion image
        </label>

        <input 
        accept="image/"
        type="file"
        onChange={convertToBase64}
        placeholder="upload image" 
        />
        <br/>
        <div className="txnimgshow">
        {image == "" || image == undefined?"":<img width={100} height={100} src={image}/>}
        </div>
     
        <label 
            for="txndate" 
            class="txnImgLabel">Transactoin date
        </label>
        <input 
             type="date" 
             id="txndate" 
             name="txnDate" 
             value={submission.txndate}>
        </input>
      </div>
    </div>
  );

  const handlePayment = () => {
    var validationerror = validateInput();
    if (
      !validationerror ||
      (formData.isTeam &&
        (!submission.teamleader ||
          submission.teamleader.length === 0 ||
          submission.teamname.length === 0))
    ) {
      return setError({
        mainColor: "#FFC0CB",
        secondaryColor: "#FF69B4",
        symbol: "pets",
        title: "Error",
        text: "Please verify the details or select at least 1 and at most 3 cohorts.",
        val: true,
      });
    }
    setShowFields(false);
    setShowPayment(true);
    isPaid = false;
  };
  if (visibleFields.length === 0 && formData.isTeam) {
    visibleFields.push(Teampage);
    showTeam = false;
  }

  const handleSubmit = async (e) => {
    var validationerror = validateInput();
    if (!validationerror) {
      return setError({
        mainColor: "#FFC0CB",
        secondaryColor: "#FF69B4",
        symbol: "pets",
        title: "Check it out",
        text: "Please Fill All The Details",
        val: true,
      });
    }
    if (
      (formData.isTeam &&
        (!isVerified ||
          submission.teamleader == "" ||
          submission.teamname == "")) ||
      (formData.amount != 0 && submission.txnid.length == 0)
    ) {
      return setError({
        mainColor: "#FFC0CB",
        secondaryColor: "#FF69B4",
        symbol: "pets",
        title: "Error",
        text: "Please verify the details",
        val: true,
      });
    }

    setIsSubmitting(true);
    try {
      var result = await axios.post(
        "/form/register",
        { ...submission, formid: formid , img : image},
        {
          headers: {
            Authorization: authCtx.token,
          },
        }
      );
      if (result.status == 200) {
        setShowPopUp(false);
        setError({
          mainColor: "#EDFEEE",
          secondaryColor: "#5CB660",
          symbol: "check_circle",
          title: "Success",
          text: "Data submitted successfully",
          val: true,
        });
        setTimeout(() => {
          return navigate("/");
        }, 2000);
      }
    } catch (error) {
      
      setError({
        mainColor: "#FFC0CB",
        secondaryColor: "#FF69B4",
        symbol: "pets",
        title: "Unsuccessful",
        text: "Failed to submit the form",
        val: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  useEffect(()=>{
   
  },[])
  return (
    <div className="regFormPopUp">
      <div className="form">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "space-between",
          }}
        >
          <label
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              width: "70%",
            }}
          >
            {formName}
          </label>
          <img
            src={cancel}
            alt=""
            onClick={() => setShowPopUp(false)}
            id="CloseIcon"
          />
        </div>

        <div className="formFieldContainer">
          {showFields ? visibleFields : <></>}
          {showPayment ? Paymentpage : <></>}
        </div>

        <div className="btns">
          {count !== 0 && (
            <button className="prevBtn" onClick={handlePrev}>
              Previous
            </button>
          )}
          {count < formData.formelement.length - limit && (
            <button className="nextBtn" onClick={handleNext}>
              Next
            </button>
          )}
          {count >= formData.formelement.length - limit &&
            (showTeam ? (
              <button className="prevBtn" onClick={handleNext}>
                Enter Team Details
              </button>
            ) : isPaid && !showPayment ? (
              <button
                className="prevBtn"
                onClick={handlePayment}
                disabled={formData.isTeam ? !isVerified : false}
              >
                Proceed To Pay
              </button>
            ) : (
              <button
                className="submitBtn"
                type="submit"
                onClick={handleSubmit}
                disabled={formData.isTeam && !isVerified && isSubmitting}
              >
                {isSubmitting ? <Load /> : "Submit"}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
}