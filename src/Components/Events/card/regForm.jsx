import React, { useState, useEffect } from 'react';
import '../../css/Events/regForm.css';
import formData from './formElements.json';
import FormField from './formField';
import cancel from '../../../assets/SkillHunt/XCircle.png';
import { Alert } from '../../../MicroInterAction/Alert';
import Switch from "react-switch";

export default function RegForm({ showPopUp, setShowPopUp }) {
    const [limit, setLimit] = useState(3);
    const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [isVerified, setIsVerified] = useState(false);
    const [isCreatingTeam, setIsCreatingTeam] = useState(false);
    const [submission, setSubmission] = useState({});
    const [teamname, setTeamName] = useState("");
    const [variants, setError] = useState({
        mainColor: "",
        secondaryColor: "",
        symbol: "",
        title: "",
        text: "",
        val: false,
    });
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
        console.log(e)
        setIsCreatingTeam(!e)
    }
    const handleVerify = async () => {
        setIsLoading(true);
        try {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            setTeamName("demo team")
            setIsVerified(true);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };
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
                                <input className="teamcreate" type="text" name="teamName" id="teamName" />
                            </div>
                        ) : (
                            <div className="jointeam">
                                <label htmlFor="teamEmail">Team leader's Email</label>
                                <div className="teamjoin">
                                    <input type="text" name="teamName" id="teamName" />
                                    <button className="verifybtn" onClick={handleVerify}>
                                        {isLoading ? "Verifying..." : "Verify"}
                                    </button>
                                </div>
                                {!isLoading && (
                                    <p className={`message ${isVerified ? "" : "message-failed"}`}>
                                        {isVerified ? `Verification successful,${teamname}
                        ` : "Please Verify"}
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

    const handleSubmit = (e) => {
        console.log(submission);
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
                            : <input className="submitBtn" type="submit" onClick={handleSubmit} disabled={!isVerified} />
                    )}
                </div>
                <Alert variant={variants} val={setError} />
            </div>
        </div>
    );
}
