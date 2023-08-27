import React, { useRef, useEffect, useState } from 'react';

// css
import formCss from "../Profile/cssp/EventForm.module.css";
import AddField from './AddField';
import { Alert } from '../../MicroInterAction/Alert';
export default function Form() {
    const [variants, setError] = useState({
        mainColor: "",
        secondaryColor: "",
        symbol: "",
        title: "",
        text: "",
        val: false,
      });
    const [showFields, setShowFields] = useState({ fields: [{}] });
    const [hideAmount, sethideAmount] = useState(true)
    const handleSave = (e) => {
        if(hideAmount){
            setShowFields(prev => {
                const formData = { ...prev, amount: 0};
                return formData;
            })
        }
        e.preventDefault();
        const formDetails = showFields;
        const formDataJSON = JSON.stringify(formDetails);
        console.log(formDetails);
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
        });
    }

    const handleDropDownChange = (e) => {
        console.log("check")
        if(e.target.value === "paid"){
            sethideAmount(false)
        }else{
            sethideAmount(true)
        }
    }
    const handleFormError = (e) =>{
        e.preventDefault()
        setError({
            mainColor: "#FFC0CB",
            secondaryColor: "#FF69B4",
            symbol: "pets",
            title: "Error",
            text: "Please fill all the required fields",
            val: true,
          });
        setTimeout(() => {
            setError({
                mainColor: "",
                secondaryColor: "",
                symbol: "",
                title: "",
                text: "",
                val: false,
            })
        }, 6000);
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
            <form action="" className={formCss.formDiv} onSubmit={handleSave} onInvalid={handleFormError}>
                <input onChange={handleChange}
                    name="formTitle"
                    type="text" className={formCss.formtitle} placeholder='Form Title*' required />
                <input onChange={handleChange} name="forrmDesc"
                    type="text" className={formCss.formtitle} placeholder='About Event*' required/>
                <select id="eventType"
                    name="eventType" className={formCss.formtitle} onChange={handleDropDownChange} required>
                    <option value="" hidden >Event Type*</option>
                    <option value="paid" className={formCss.formDropDownOption}>Paid</option>
                    <option value="free" className={formCss.formDropDownOption}>Free</option>
                </select>
                <input id="amount" onChange={handleChange} hidden={hideAmount} required={!hideAmount}
                    name="amount" type="number" className={formCss.formtitle} placeholder='Amount*' />
                <input onChange={handleChange} required
                    name="priority" type="number" className={formCss.formtitle} placeholder='Priority*' />
                {fields}
                <div>
                    <button className={formCss.saveBtn} onClick={handleAdd}>ADD FIELD</button>
                    <button type="submit"className={formCss.saveBtn}>SAVE</button>
                </div>
            </form>
            <Alert variant={variants} val={setError} />
        </>
    );
}