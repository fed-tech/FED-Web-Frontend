import React, { useRef, useEffect } from 'react';

// css
import formCss from "../Profile/cssp/EventForm.module.css";

export default function Form() {
    
    const formBottomRef = useRef(null);

    useEffect(() => {
        const formBottom = formBottomRef.current;
        formBottom.addEventListener('wheel', (event) => {
        if (event.deltaY !== 0) {
            event.preventDefault();
            formBottom.scrollLeft += event.deltaY;
        }
        });
    }, []);
    
    return (
        <>
            <div className={formCss.head}>
                <h1>NEW FORM</h1>

            </div>
            <form action="" className={formCss.formDiv}>
                <input type="text" className={formCss.formtitle} placeholder='Form Title*' />
                <input type="text" className={formCss.formtitle} placeholder='About Event*' />
                <select id="eventType" className={formCss.formtitle} placeholder='Event Type*'>
                <option value="free" default>Event Type</option>
                <option value="paid">Paid</option>
                <option value="free">Free</option>
                </select>    
                <input type="text" className={formCss.formtitle} placeholder='Amount' />
                <input type="text" className={formCss.formtitle} placeholder='Priority' />
                <div ref={formBottomRef} className={formCss.formBottom}>
                    <input type="text" className={formCss.formaddfield} placeholder='Field Name*' />
                    <input type="text" className={formCss.formaddfield} placeholder='Field Type*' />
                    <input type="text" className={formCss.formaddfield} placeholder='Field Type*' />
                </div>
                <div>
                <button className={formCss.saveBtn}>ADD FIELD</button>
                <button className={formCss.saveBtn}>SAVE</button>
                </div>
            </form>
        </>
    );
}