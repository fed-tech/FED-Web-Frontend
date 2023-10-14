import React, { useState, useEffect } from 'react';
import '../css/regForm.css';
import formData from './formElements.json';
import FormField from './formField';
import cancel from '../../../../assets/SkillHunt/XCircle.png';
import { Alert } from '../../../../MicroInterAction/Alert';

export default function RegForm({ showPopUp, setShowPopUp }) {
    const [limit, setLimit] = useState(3);
    const [count, setCount] = useState(0);
    const [submission,setSubmission] = useState({});
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
        var validationerror = formData.formelement.slice(count, count + limit).every((e)=>{
            //check for radio and checkbox
            console.log(e.type)
            if(e.type == "checkbox"){
                return submission[e.title]?
                Object.keys(submission[e.title]).every((f)=>{
                    console.log(submission[e.title][f])
                    return submission[e.title][f]
                }):false
            }else{
              if (!submission[[e.title]] && e.required) {
                return false
              }
            }
            return true
        })
        if(!validationerror){
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
        if (visibleFields.length == 0 && formData.isTeam) {
            visibleFields.push(<div>Team Page</div>);
            showTeam =false
        }
    const handleSubmit = (e)=>{
        console.log(submission)
        setShowPopUp(false)
    }
    useEffect(()=>{
        console.log(submission)
    },[submission])

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
                        showTeam?
                        <button className='prevBtn' onClick={handleNext}>Enter Team Details</button>
                        :<input className="submitBtn" type="submit" onClick={handleSubmit}/>
                    )}
                </div>
                <Alert variant={variants} val={setError} />
            </div>
        </div>
    );
}
