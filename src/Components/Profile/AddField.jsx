import React, { useRef, useEffect } from 'react';

// css
import formCss from "../Profile/cssp/EventForm.module.css";
import addCss from "../Profile/cssp/AddField.module.css"
export default function AddField({ idx, setShowFields, handleDelete}) {

    // const handleDelete = (e) => {
    //     e.preventDefault();
    // }
    return (
        <>
            <div className={formCss.formBottom}>
                <input type="text" className={formCss.formaddfield} placeholder='Field Name*' />
                <input type="text" className={formCss.formaddfield} placeholder='Field Type*' />
                <input type="text" className={formCss.formaddfield} placeholder='Field Type*' />
                {idx !== 0 &&
                    <button
                        onClick={handleDelete}
                        className={addCss.deleteBtn}
                    >Delete</button>}
            </div>
        </>
    );
}