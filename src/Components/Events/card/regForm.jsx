import React, { useState, useEffect , useContext} from 'react';
import '../../css/Events/regForm.css';
import formData from './formElements.json';
import FormField from './formField';
import cancel from '../../../assets/SkillHunt/XCircle.png';
import Switch from "react-switch";
import Load from "../../../MicroInterAction/Load"
import axios from 'axios';
import AuthContext from "../../../store/auth-context";
import {QRCodeSVG} from 'qrcode.react';
export default function RegForm({ showPopUp, setShowPopUp, setError }) {
    const authCtx = useContext(AuthContext);
    const [limit, setLimit] = useState(3);
    const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [isVerified, setIsVerified] = useState(false);
    const [isCreatingTeam, setIsCreatingTeam] = useState(false);
    const [submission, setSubmission] = useState({});
    const [teamleadermail, setTeamleadermail] = useState("");
    const [message,setMessage] = useState("")
    const [formid,setFormId] = useState("652bdb0f955481122df6ef27")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [showPayment,setShowPayment] = useState(false)
    const [showFields,setShowFields] = useState(true)
    var showTeam = formData.isTeam
    var isPaid = formData.amount != 0 
    const handleNext = () => {
        var validationerror = formData.formelement.slice(count, count + limit).every((e) => {
            //check for radio and checkbox
            console.log(e.type)
            if (e.type == "checkbox") {
                return submission[e.title] ?
                    Object.keys(submission[e.title]).every((f) => {
                        console.log(submission[e.title][f])
                        return submission[e.title][f]
                    }) : false
            } else {
                if (!submission[[e.title]] && e.required) {
                    return false
                }
            }
            return true
        })
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
        !validationerror || setCount(prevCount => prevCount + limit);
    };
    const onChange = (e) => {
        const {name, value}=e.target
        setSubmission({...submission,[name]:value})
    }
    const handlePrev = () => {
        if(showPayment){
            setShowFields(true)
            setShowPayment(false)
        }else{
            setCount(prevCount => Math.max(prevCount - limit, 0));
        }
    };
    var visibleFields = []
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
        setMessage("")
        setIsVerified(!e)
        setIsCreatingTeam(!e)
    }
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
            if(result.status == 200){
                console.log(result.data)
                if(result.data.validation){
                    setIsVerified(true)
                    console.log(result.data.message)
                    setSubmission({...submission,teamleader:teamleadermail, teamname: result.data.message})
                    setMessage("Verification Successfull,Your team name is "+result.data.message)
                }else{
                    setIsVerified(false)
                    setMessage("Verification Failed")
                }
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };
    const handleTeam = (e) =>{
        console.log(e.target.value)
        setSubmission({...submission,teamleader:authCtx.user.email,teamname:e.target.value})
    }
    const handleTeamleader = (e) =>{
        setTeamleadermail(e.target.value)
    }
    
    const Teampage = (
            <div>
                <div className='teamDiv' style={{ display: "flex", flexDirection: "column" }}>
                    <div className='teamHead'>
                        <label>Create Team</label>
                        <Switch className='toggle'
                            onChange={handleToggle}
                            checked={!isCreatingTeam}
                            checkedIcon={false}
                            uncheckedIcon={false}
                            onColor="#f45725;"
                            offColor="#f45725;"
                        ></Switch>
                        <label>Join Team</label>
                    </div>
                    <div className='team'>
                        {isCreatingTeam ? (
                            <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                                <label htmlFor="teamName">Team Name</label>
                                <input className="teamcreate" type="text" name="teamName" id="teamName" onChange={handleTeam} value={submission.teamname}/>
                            </div>
                        ) : (
                            <div className="jointeam">
                                <label htmlFor="teamEmail">Team leader's Email</label>
                                <div className="teamjoin">
                                    <input type="text" name="teamName" id="teamName" onChange={handleTeamleader} value={teamleadermail}/>
                                    <button className="verifybtn" onClick={handleVerify}>
                                        {isLoading ? <Load />: "Verify"}
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
        )

    
    const Paymentpage = (
      <div>
        <div className="paymentMain fontDets">
          <label>
            Kindly Pay ₹{formData.amount} to the below QR Code thorugh any
            payment provider. After the transaction is completed, Provide Us the last four digit of the transaction ID received by you
            </label>
          <div className="qrcode">
            <QRCodeSVG
              value={`upi://pay?pa=${formData.upi}&am=${formData.amount}&cu=INR`}
              imageSettings={{
                src: "https://uploads-ssl.webflow.com/629d87f593841156e4e0d9a4/62eeaa9927e6aea4ff13590e_FedLogo.png",
                excavate: true,
                width:40,
                height:40
              }}
              level={'H'}
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
        </div>
      </div>
    );


    const handlePayment = () =>{
      if(!submission.teamleader || submission.teamleader.length === 0 || submission.teamname.length === 0){
        return setError({
          mainColor: "#FFC0CB",
          secondaryColor: "#FF69B4",
          symbol: "pets",
          title: "Error",
          text: "Please verify the team details",
          val: true,
        });
      }
        setShowFields(false)
        setShowPayment(true)
        isPaid = false
    }
    if (visibleFields.length === 0 && formData.isTeam) {
        visibleFields.push(Teampage);
        showTeam = false;
    }

    const handleSubmit = async (e) => {
        if(!isVerified){
            return setError({
                mainColor: "#FFC0CB",
                secondaryColor: "#FF69B4",
                symbol: "pets",
                title: "Error",
                text: "Please verify the team details",
                val: true,
            });
        }
        if(submission.teamleader == "" || submission.teamname == ""){
          return setError({
            mainColor: "#FFC0CB",
            secondaryColor: "#FF69B4",
            symbol: "pets",
            title: "Error",
            text: "Please verify the team details",
            val: true,
          });
        }
        setIsSubmitting(true)
        try{
            var result = await axios.post("/form/register", {...submission,formid:formid}, {
              headers: {
                Authorization: authCtx.token,
              },
            });
        }catch(error){
            setError({
                mainColor: "#FFC0CB",
                secondaryColor: "#FF69B4",
                symbol: "pets",
                title: "Unsuccessful",
                text: "Failed to submit the form",
                val: true,
            });
        }
        finally{
            setIsSubmitting(false)
        }
        setShowPopUp(false);
    };


    useEffect(() => {
        console.log(submission);
    }, [submission]);




    return (
      <div className="regFormPopUp">
        <div className="form">
          <img
            src={cancel}
            alt=""
            onClick={() => setShowPopUp(false)}
            id="CloseIcon"
          />
          {showFields?visibleFields:<></>}
          {showPayment?Paymentpage:<></>}
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
              ) : isPaid && !showPayment? (
                <button className="prevBtn" onClick={handlePayment} disabled={formData.isTeam?!isVerified:false}>
                    Proceed To Pay
                </button>
              ) : (
                <button
                  className="submitBtn"
                  type="submit"
                  onClick={handleSubmit}
                  disabled={!isVerified}
                >
                  {isSubmitting ? <Load /> : "Submit"}
                </button>
              ))}
          </div>
        </div>
      </div>
    );
}
