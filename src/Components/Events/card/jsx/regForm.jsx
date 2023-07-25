import React from 'react';
import '../css/regForm.css'
import formData from './formElements.json';
import FormField from './formField';
export default function regForm() {
    const fields = formData.formelement.map((field, idx) => {
        return <FormField 
            key = {idx}
            {...field}
        />
    })
    return (
        <div className='regFormPopUp'>
            <div className="form">
              {fields}
            </div>
        </div>
    );
}