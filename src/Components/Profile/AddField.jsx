import React, { useRef, useEffect, useState } from 'react';

// css
import formCss from "../Profile/cssp/EventForm.module.css";
import addCss from "../Profile/cssp/AddField.module.css"
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
        })
    }
    return (
        <>
            <div className={formCss.formBottom}>
                <input
                    type="text"
                    className={formCss.formaddfield}
                    placeholder='Field Name*'
                    onChange={handleValues}
                    name="name"
                    value={showFields.fields[idx].name}
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
                    value={showFields.fields[idx].type}
                    name="type"
                    onChange={handleValues}
                    className={formCss.formaddfield}
                    required>
                    <option value="" hidden >Field Type*</option>
                    <option value="text" className={formCss.formDropDown}>text</option>
                    <option value="number" className={formCss.formDropDown}>number</option>
                    <option value="radio" className={formCss.formDropDown}>radio</option>
                    <option value="checkbox" className={formCss.formDropDown}>checkbox</option>
                    <option value="date" className={formCss.formDropDown}>date</option>
                    <option value="time" className={formCss.formDropDown}>time</option>
                </select>
                <input
                    type="text"
                    className={formCss.formaddfield}
                    placeholder='Field Value*'
                    onChange={handleValues}
                    name="value"
                    value={showFields.fields[idx].value}
                    required
                />
                {idx !== 0 &&
                    <button
                        onClick={handleDelete}
                        className={addCss.deleteBtn}
                    >Delete</button>}
            </div>
        </>
    );
}