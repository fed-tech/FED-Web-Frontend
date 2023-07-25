import React from 'react';

export default function formField({ ...field }) {
    return (
        <div className='fontDets'>
            {field.type === "radio" || field.type === "checkbox"?
                <div className="inpField">
                    <label>{field.title}</label>
                    <div className="input">
                        {field.value.map(radio => <>
                            <input className="radioInp" type={field.type} value={radio} placeholder={field.placeholder} />
                            <label className='radioLabel'>{radio}</label>
                        </>
                        )}
                    </div>
                </div> 
                :
                <div className='inpField'>
                    <label>{field.title}</label>
                    <div className="input">
                        <input type={field.type} value={field.value} placeholder={field.placeholder} />
                    </div>
                </div>
            }

        </div>
    );
}