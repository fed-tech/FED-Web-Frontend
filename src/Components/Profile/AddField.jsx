import React, { useRef, useEffect } from 'react';

// css
import formCss from "../Profile/cssp/EventForm.module.css";

export default function AddField() {


    return (
        <>
            <div className={formCss.formBottom}>
                <input type="text" className={formCss.formaddfield} placeholder='Field Name*' />
                <input type="text" className={formCss.formaddfield} placeholder='Field Type*' />
                <input type="text" className={formCss.formaddfield} placeholder='Field Type*' />
            </div>
        </>
    );
}