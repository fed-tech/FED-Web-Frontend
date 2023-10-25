import React from "react";

import RCss from './RegCards.module.css'
import click from '../../../assets/Omega/click.svg'
import { eventDetails } from "../page1/eventDetails";

export default function RegisterCards({img, logo, desc, isRegistered, showform, formelement,formid}) {
    console.log(formelement)
    const handleClick = () =>{
        showform(formelement,formid)
    }
    return (
        <div className={RCss.cardMain}>
            <div className={RCss.cardImg}>
                <img src={img} alt="" />
            </div>
            <div className={RCss.right}>
                <div className={RCss.eventLogo}>
                    <img src={logo} alt="" />
                </div>
                <div className={RCss.eventDescription}>{desc}</div>
                <button className={RCss.registerBtn} disabled={isRegistered} onClick={handleClick}>{true?(isRegistered?"ALREADY REGISTERED":"REGISTER NOW"):"REGISTRATION CLOSED"}
                    <img src={click} alt="" />
                </button>
            </div>
        </div>
    );
}