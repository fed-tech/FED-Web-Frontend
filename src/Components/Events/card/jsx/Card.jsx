import React from 'react'
import Cardcontent from "./cardcontent.jsx"

import eventcard from "../../../../Data/eventcard.js"

export default function Card() {
  var cards=[]
  if(eventcard.length%2===0){
    for(let i=0;i<eventcard.length;i=i+2){
      var rowelements=[]
      rowelements.push(<div className='event'><Cardcontent eventcard={eventcard[i]}/><Cardcontent eventcard={eventcard[i+1]}/></div>)
      cards.push(rowelements)
    }
  }
  else{
    for(let i=0;i<eventcard.length-1;i=i+2){
      var rowelements=[]
      rowelements.push(<div className='event'><Cardcontent eventcard={eventcard[i]}/><Cardcontent eventcard={eventcard[i+1]}/></div>)
      cards.push(rowelements)
    }
    var oddcard=[]
    oddcard.push(<div className='event'><Cardcontent eventcard={eventcard[eventcard.length-1]}/></div>)
    cards.push(oddcard)
  }

  return (
    <>
      <div className='cards'>
        {cards}
      </div>
    </>
  )
}
