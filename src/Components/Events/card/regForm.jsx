import React, { useState, useEffect , useContext} from 'react';
import '../../css/Events/regForm.css';
import formData from './formElements.json';
import FormField from './formField';
import cancel from '../../../assets/SkillHunt/XCircle.png';
import Switch from "react-switch";
import Load from "../../../MicroInterAction/Load"
import axios from 'axios';
import AuthContext from "../../../store/auth-context";

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
    var showTeam = formData.isTeam
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

    const handlePrev = () => {
        setCount(prevCount => Math.max(prevCount - limit, 0));
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

    if (visibleFields.length === 0 && formData.isTeam) {
        visibleFields.push(
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
                                <input className="teamcreate" type="text" name="teamName" id="teamName" onChange={handleTeam}/>
                            </div>
                        ) : (
                            <div className="jointeam">
                                <label htmlFor="teamEmail">Team leader's Email</label>
                                <div className="teamjoin">
                                    <input type="text" name="teamName" id="teamName" onChange={handleTeamleader}/>
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
        );
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
                {visibleFields}
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
                    {count >= formData.formelement.length - limit && (
                        showTeam ?
                            <button className='prevBtn' onClick={handleNext}>Enter Team Details</button>
                            : <button className="submitBtn" type="submit" onClick={handleSubmit} disabled={!isVerified} >
                                {isSubmitting ? <Load /> : "Submit"}
                            </button>
                    )}
                </div>
            </div>
        </div>
    );
}
