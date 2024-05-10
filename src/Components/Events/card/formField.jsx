import React, { useEffect } from "react";
import DOMPurify from "dompurify";
import { Label } from "@mui/icons-material";

export default function formField({
  count,
  setCount,
  submission,
  setSubmission,
  ...field
}) {
  const reqd = {
    required: field.required && true,
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    if (e.target.type == "checkbox") {
      setSubmission({
        ...submission,
        [name]: { ...submission[[name]], [value]: e.target.checked },
      });
      return;
    } else {
      setSubmission({ ...submission, [name]: value });
    }
  };
  return (
    <div className="fontDets">
      {field.type === "list" ? (
        <div className="inpField">
          <label>
            {field.name}
            {field.required ? <>* </> : <></>}
          </label>
          <select onChange={onChange} className={"year"} name={field.name}>
            <option hidden>Please Select</option>
            {field.value.split(",").map((radio) => {
              var selected = submission[field.name] &&
              submission[field.name] == radio
              ? true
              : false
              return <option selected={selected}>{radio}</option>;
            })}
          </select>
        </div>
      ) : field.type === "radio" || field.type === "checkbox" ? (
        <div className="inpField">
          <label>
            {field.name}
            {field.required ? <>* </> : <></>}
          </label>
          <div className="input radioDiv">
            {field.value.split(",").map((radio) => (
              <div className="labelAndRadio">
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
                {/* button used due to white space wrapping problem that we were not able to solve */}
                <button htmlFor={radio} className="radioLabel" disabled={true}>
                  {radio}
                </button>
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
              onFocus={(e) => e.target.addEventListener("wheel", function (e) { e.preventDefault() }, { passive: false })}
            />
          </div>
        </div>
      )}
    </div>
  );
}
