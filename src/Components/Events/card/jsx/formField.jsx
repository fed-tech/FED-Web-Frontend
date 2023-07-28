import React from 'react';

export default function formField({count, setCount, ...field }) {
    const reqd = {
        required : field.required && true
    }
    return (
        <div className='fontDets'>
            {field.type === "radio" || field.type === "checkbox"?
                <div className="inpField">
                    <label>{field.title}</label>
                    <div className="input radioDiv">
                        {field.value.map(radio => <div>
                            <input {...reqd} className="radioInp" name={field.title} type={field.type} id={radio} value={radio} placeholder={field.placeholder} />
                            <label htmlFor={radio} className='radioLabel'>{radio}</label>
                        </div>
                        )}
                    </div>
                </div> 
                :
                <div className='inpField'>
                    <label>{field.title}</label>
                    <div className="input">
                        <input {...reqd} type={field.type} value={field.value} placeholder={field.placeholder} />
                    </div>
                </div>
            }
        </div>
    );
}