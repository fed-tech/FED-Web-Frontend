import React, { useEffect } from 'react';

export default function formField({count, setCount, submission, setSubmission, ...field }) {
    const reqd = {
        required : field.required && true
    }
    const onChange = (e) => {
        const {name, value}=e.target
        if(e.target.type == "checkbox"){
            setSubmission({...submission,[name]:{...submission[[name]],[value]:e.target.checked}})
            return
        }else{
        setSubmission({...submission,[name]:value})
        }
    }
    return (
        <div className='fontDets'>
            {field.type === "radio" || field.type === "checkbox"?
                <div className="inpField">
                    <label>{field.title}{field.required?<>* </>:<></>}</label>
                    <div className="input radioDiv">
                        {field.value.map(radio => <div>
                            <input className="radioInp" name={field.title} type={field.type} id={radio} value={radio} placeholder={field.placeholder} onChange={onChange}/>
                            <label htmlFor={radio} className='radioLabel'>{radio}</label>
                        </div>
                        )}
                    </div>
                </div> 
                :
                <div className='inpField'>
                    <label>{field.title}{field.required?<>* </>:<></>}</label>
                    <div className="inputField">
                        <input {...reqd} type={field.type} name={field.title} defaultValue={field.value} placeholder={field.placeholder} onChange={onChange}/>
                    </div>
                </div>
            }
        </div>
    );
}