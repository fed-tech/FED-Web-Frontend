import React, { useRef, useEffect, useState } from 'react';

// css
import formCss from "../../../css/Profile/Dashboard/EventForm/EventForm.module.css";
import addCss from "../../../css/Profile/Dashboard/EventForm/AddField.module.css"
export default function AddField({ idx, setShowFields, showFields, handleDelete }) {

    const handleValues = (e) => {
        const { name, value } = e.target;
        console.log(name, value);

        // setShowFields(prev => {
        //     const currState = [...prev];
        //     currState[idx] = {
        //         ...currState[idx],
        //         [name]: value
        //     };
        //     return currState;
        // })
        setShowFields(prev => {
            const currState = { ...prev };
            currState.fields[idx] = {
                ...currState.fields[idx],
                [name]: value
            };
            return currState;
        });
    };

    // Function to render Field Value input based on Field Type
    const renderFieldValueInput = () => {
        const fieldType = showFields.fields[idx].type || "";

        switch (fieldType) {
            case "date":
                return (
                    <input
                        type="date"
                        className={formCss.formaddfield}
                        placeholder="Enter Date"
                        onChange={handleValues}
                        name="value"
                        value={showFields.fields[idx].value || ""}
                    />
                );
            case "number":
                return (
                    <input
                        type="number"
                        className={formCss.formaddfield}
                        placeholder="Enter Value"
                        onChange={handleValues}
                        name="value"
                        value={showFields.fields[idx].value || ""}
                    />
                );
            case "text":
                return (
                    <input
                        type="text"
                        className={formCss.formaddfield}
                        placeholder="Enter Text"
                        onChange={handleValues}
                        name="value"
                        value={showFields.fields[idx].value || ""}
                    />
                );
            case "time":
                return (
                    <input
                        type="time"
                        className={formCss.formaddfield}
                        placeholder="Enter Time"
                        onChange={handleValues}
                        name="value"
                        value={showFields.fields[idx].value || ""}
                    />
                );
            case "radio":
            case "checkbox":
            default:
                return (
                    <input
                        type="text"
                        className={formCss.formaddfield}
                        placeholder="Field Value"
                        onChange={handleValues}
                        name="value"
                        value={showFields.fields[idx].value || ""}
                    />
                );
        }
    };
    return (
        <>
            <div className={formCss.formBottom}>
                <input
                    type="text"
                    className={formCss.formaddfield}
                    placeholder='Field Name*'
                    onChange={handleValues}
                    name="name"
                    value={showFields.fields[idx].name || ""}
                    required
                />
                {/* <input
                    type="text"
                    className={formCss.formaddfield}
                    placeholder='Field Type*'
                    onChange={handleValues}
                    name="type"
                    value={showFields.fields[idx].type}
                    required
                /> */}
                <select
                    value={showFields.fields[idx].type || ""}
                    name="type"
                    onChange={handleValues}
                    className={formCss.formaddfield}
                    required>
                    <option value="" hidden >Field Type*</option>
                    <option value="text" className={formCss.formDropDown}>Text</option>
                    <option value="number" className={formCss.formDropDown}>Number</option>
                    <option value="radio" className={formCss.formDropDown}>Radio</option>
                    <option value="checkbox" className={formCss.formDropDown}>Checkbox</option>
                    <option value="date" className={formCss.formDropDown}>Date</option>
                    <option value="time" className={formCss.formDropDown}>Time</option>
                </select>
                {renderFieldValueInput()}
                {idx !== 0 &&
                    <button
                        onClick={handleDelete}
                        className={addCss.deleteBtn}
                    >Delete</button>}
            </div>
        </>
    );
}