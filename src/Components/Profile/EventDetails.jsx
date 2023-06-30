import React from 'react'

// css
import eventCss from "./cssp/EventDetails.module.css";

// logo
import logo from "../../Img/image26.png"
function EventDetails({ cardNo }) {
  function print() {
    console.log(cardNo);
    // console.log('fired')
  }
  return (
    <div>
      <div className={eventCss.details}>
        <div className={eventCss.eventName}>
          {/* <img src={cardNo.image} alt="" /> */}
          <img src={logo} alt="" />
          {/* <h1>{cardNo.title}</h1> */}
          <h1>Stonkaholic</h1>
        </div>
        {/* <div className="eventDesc">About the Event : {cardNo.description}</div> */}
        <div className={eventCss.eventDesc}>
          About the Event : If you are immersed in the world of trading, you've unquestionably come across stocks and investments.This incredible competition allows all the participants to experience hands-on stock trading and hone their financial literacy. Trade with virtual money as you
        </div>
        <div className={eventCss.moreDetails}>
          <div className={eventCss.date}>Event Date : {cardNo.date} {cardNo.month}</div>
          <div className={eventCss.regType}>Registration : {cardNo.registration}</div>
        </div>
        <div className={eventCss.forms}>
          <div className={eventCss.form}>Form 1</div>
          <div className={eventCss.form}>Form 1</div>
          <div className={eventCss.form}>Form 1</div>
          <div className={eventCss.form}>Form 1</div>
          <div className={eventCss.form}>Form 1</div>
          <div className={eventCss.form}>Form 1</div>
          <div className={eventCss.form}>Form 1</div>
          <div className={eventCss.form}>Form 1</div>
          <div className={eventCss.form}>Form 1</div>
          <div className={eventCss.form}>Form 1</div>
          <div className={eventCss.form}>Form 1</div>
          <div className={eventCss.form}>Form 1</div>
          <div className={eventCss.form}>Form 1</div>
          <div className={eventCss.form}>Form 1</div>
          <div className={eventCss.form}>Form 1</div>
          <div className={eventCss.form}>Form 1</div>
          <div className={eventCss.form}>Form 1</div>
          <div className={eventCss.form}>Form 1</div>

        </div>
        <div className={eventCss.btns}>
          <button className={eventCss.edit}>Edit</button>
          <button className={eventCss.delete}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default EventDetails
