import React, { useRef, useEffect, useState } from 'react';

// css
import formCss from "../Profile/cssp/EventForm.module.css";
import AddField from './AddField';
export default function Form() {

    const [showFields, setShowFields] = useState({ fields: [{}] });
    const handleSave = (e) => {
        e.preventDefault();
        const formDetails = showFields;

        const formDataJSON = JSON.stringify(formDetails);

        console.log(formDataJSON);
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setShowFields(prev => {
            const formData = { ...prev, [name]: value };
            return formData;
        })
    }

    const handleDelete = (e, idx) => {
        e.preventDefault();
        console.log("deleted", idx);
        setShowFields(prev => {
            const updatedFields = {...prev};
            updatedFields.fields.splice(idx, 1);
            return updatedFields;
        });
    }
    const fields = showFields.fields.map((i, idx) => {
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
            const currState = {...prev}
            currState.fields.push({});
            return currState;
            // return {...prev, prev.fields};
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
                <input onChange={handleChange}
                    name="formTitle"
                    type="text" className={formCss.formtitle} placeholder='Form Title*' />
                <input onChange={handleChange}
                    type="text" className={formCss.formtitle} placeholder='About Event*' />
                <select id="eventType"
                    name="eventType" className={formCss.formtitle} placeholder='Event Type*'>
                    <option value="free" default>Event Type</option>
                    <option value="paid">Paid</option>
                    <option value="free">Free</option>
                </select>
                <input onChange={handleChange}
                    name="amount" type="text" className={formCss.formtitle} placeholder='Amount' />
                <input onChange={handleChange}
                    name="priority" type="text" className={formCss.formtitle} placeholder='Priority' />
                {fields}
                <div>
                    <button className={formCss.saveBtn} onClick={handleAdd}>ADD FIELD</button>
                    <button className={formCss.saveBtn} onClick={handleSave}>SAVE</button>
                </div>
            </form>
        </>
    );
}