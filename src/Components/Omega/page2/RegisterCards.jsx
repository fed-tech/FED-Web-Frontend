import React from "react";

import RCss from './RegCards.module.css'
import click from '../../../assets/Omega/click.svg'
import { eventDetails } from "../page1/eventDetails";

export default function RegisterCards() {
    return (
        <div className={RCss.cardMain}>
            <div className={RCss.cardImg}>
                <img src={eventDetails[0].image} alt="" />
            </div>
            <div className={RCss.right}>
                <div className={RCss.eventLogo}>
                    <img src={eventDetails[0].logo} alt="" />
                </div>
                <div className={RCss.eventDescription}>what about the website ?? i have received the designs for the same and it will be very difficult to make that website once vacations starts.</div>
                <div className={RCss.registerBtn}>REGISTER NOW
                    <img src={click} alt="" />
                </div>
            </div>
        </div>
    );
}