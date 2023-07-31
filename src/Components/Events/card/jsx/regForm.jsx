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

    const handleNext = () => {
        var validationerror = false
        formData.formelement.slice(count, count + limit).forEach((e)=>{
            if(!submission[[e.title]] && e.required){
                validationerror = true
                setError({
                    mainColor: "#FFC0CB",
                    secondaryColor: "#FF69B4",
                    symbol: "pets",
                    title: "Check it out",
                    text: "Please Fill All The Details",
                    val: true,
                });
            }
        })
        validationerror || setCount(prevCount => prevCount + limit);
    };

    const handlePrev = () => {
        setCount(prevCount => Math.max(prevCount - limit, 0));
    };

    const visibleFields = formData.formelement.slice(count, count + limit).map((field, idx) => {
        return (
            <FormField key={idx} {...field} count={count} setCount={setCount} submission={submission} setSubmission ={setSubmission}/>
        );
    });

    const handleSubmit = (e)=>{
        console.log(e.target.value)
    }

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
                    {count < formData.formelement.length - limit && (
                        <button className="nextBtn" onClick={handleNext}>
                            Next
                        </button>
                    )}
                    {count !== 0 && (
                        <button className="prevBtn" onClick={handlePrev}>
                            Previous
                        </button>
                    )}
                    {count >= formData.formelement.length - limit && (
                        <input className="prevBtn" type="submit"/>
                    )}
                </div>
                <Alert variant={variants} val={setError} />
            </div>
        </div>
    );
}
