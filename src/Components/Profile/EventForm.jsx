import React from 'react';

// css
import formCss from "../Profile/cssp/EventForm.module.css";

export default function Form() {
    return(
        <>
        <h1>NEW FORM</h1>
        <form action="">
            <input type="text" placeholder='Form Title*'/>
            <input type="text" placeholder='About Event*'/>
            <input type="text" placeholder='Event Type*'/>
            <input type="text" placeholder='Amount'/>
            <input type="text" placeholder='Priority'/>
            <div className={formCss.formBottom}>
            <input type="text" placeholder='Field Name*'/>
            <input type="text" placeholder='Field Type*'/>
            <input type="text" placeholder='Field Type*'/>
            </div>

        </form>
        </>
    );
}