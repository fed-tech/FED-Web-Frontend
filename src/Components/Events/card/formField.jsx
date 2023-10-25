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
      <div className="fontDets">
        {field.type === "radio" || field.type === "checkbox" ? (
          <div className="inpField">
            <label>
              {field.name}
              {field.required ? <>* </> : <></>}
            </label>
            <div className="input radioDiv">
              {field.value.split(',').map((radio) => (
                <div className='labelAndRadio'>
                  <input
                    className="radioInp"
                    name={field.name}
                    type={field.type}
                    id={radio}
                    defaultValue={radio}
                    placeholder={field.placeholder}
                    onChange={onChange}
                    defaultChecked={
                      field.type === "radio"
                        ? submission[field.name] &&
                          submission[field.name] == radio
                          ? true
                          : false
                        : submission[field.name]
                        ? submission[field.name][radio]
                        : false
                    }
                  />
                  <label htmlFor={radio} className="radioLabel">
                    {radio}
                  </label>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="inpField">
            <label>
              {field.name}
              {field.required ? <>* </> : <></>}
            </label>
            <div className="inputField">
              <input
                {...reqd}
                type={field.type}
                name={field.name}
                defaultValue={
                  field.value != submission[field.name]
                    ? submission[field.name]
                    : field.value
                }
                placeholder={field.placeholder}
                onChange={onChange}
              />
            </div>
          </div>
        )}
      </div>
    );
}