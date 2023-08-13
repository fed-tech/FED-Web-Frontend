import React, { useRef, useEffect, useState } from 'react';

// css
import formCss from "../Profile/cssp/EventForm.module.css";
import AddField from './AddField';
export default function Form() {

    const [showFields, setShowFields] = useState([{}]);

    const handleSave = (e) => {
        // Create a JSON object from showFields
        e.preventDefault();
        const formData = {
            formTitle: '', // Add your form title here
            aboutEvent: '', // Add your about event text here
            eventType: '', // Add your event type here
            amount: '', // Add your amount value here
            priority: '', // Add your priority value here
            fields: showFields,
        };

        // Convert formData object to JSON string
        const formDataJSON = JSON.stringify(formData);

        // Now you can do whatever you want with the formDataJSON
        console.log(formDataJSON);
    };

    const handleDelete = (e, idx) => {
        e.preventDefault();
        console.log("deleted", idx);
        setShowFields(prev => {
            const updatedFields = [...prev];
            updatedFields.splice(idx, 1);
            return updatedFields;
        });
    }
    const fields = showFields.map((i, idx) => {
        return <AddField
            key={idx}
            idx={idx}
            setShowFields={setShowFields}
            showFields={showFields}
            handleDelete={(e => handleDelete(e, idx))}
        />
    })

    const handleAdd = (event) => {
        event.preventDefault();
        setShowFields(prev => {
            return [...prev, prev.push({})];
        });
    }
    // const formBottomRef = useRef(null);

    // useEffect(() => {
    //     const formBottom = formBottomRef.current;
    //     formBottom.addEventListener('wheel', (event) => {
    //     if (event.deltaY !== 0) {
    //         event.preventDefault();
    //         formBottom.scrollLeft += event.deltaY;
    //     }
    //     });
    // }, []);

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
                {fields}
                <div>
                    <button className={formCss.saveBtn} onClick={handleAdd}>ADD FIELD</button>
                    <button className={formCss.saveBtn} onClick={handleSave}>SAVE</button>
                </div>
            </form>
        </>
    );
}