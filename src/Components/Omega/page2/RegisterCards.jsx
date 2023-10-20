import React from "react";

import RCss from './RegCards.module.css'
import { eventDetails } from "../page1/eventDetails";

export default function RegisterCards() {
    return <div className={RCss.cardMain}>
        <div className={RCss.cardImg}>
            <img src={eventDetails[0].image} alt="" />
        </div>
        <div className="right">
            <div className="eventLogo">
                <img src={eventDetails[0].logo} alt="" />
            </div>
            <div className="eventDescription">what about the website ?? i have received the designs for the same and it will be very difficult to make that website once vacations starts.</div>
            <div className="registerBtn">Register Now</div>
        </div>
    </div>
}