import React, { useState, useEffect } from 'react';
import '../css/regForm.css';
import formData from './formElements.json';
import FormField from './formField';
import cancel from '../../../../assets/SkillHunt/XCircle.png';

export default function RegForm({ showPopUp, setShowPopUp }) {
    const [limit, setLimit] = useState(3);
    const [count, setCount] = useState(0);

    const handleNext = () => {
        setCount(prevCount => prevCount + limit);
    };

    const handlePrev = () => {
        setCount(prevCount => Math.max(prevCount - limit, 0));
    };

    const visibleFields = formData.formelement.slice(count, count + limit).map((field, idx) => {
        return (
            <FormField key={idx} {...field} count={count} setCount={setCount} />
        );
    });

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
                        <input className="prevBtn" type="submit" />
                    )}
                </div>
            </div>
        </div>
    );
}
