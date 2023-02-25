import React from 'react'
import Header from '../Components/Events/header/jsx/Header.jsx'
import Card from '../Components/Events/card/jsx/Card.jsx'

export default function Events() {
  React.useEffect(() => {       window.scrollTo(0, 0);     }, []);
  return (
    <div>
        <Header head="Previous Events"/>
        <Card/>
    </div>
  )
}