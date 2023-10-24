import React from "react";

import RCss from './RegCards.module.css'
import click from '../../../assets/Omega/click.svg'
import { eventDetails } from "../page1/eventDetails";

export default function RegisterCards({img, logo, desc}) {
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
                <button className={RCss.registerBtn}>REGISTER NOW
                    <img src={click} alt="" />
                </button>
            </div>
        </div>
    );
}