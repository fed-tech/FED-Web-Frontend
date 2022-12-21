import React from 'react'
import { NavLink } from "react-router-dom";
import "../css/MobileNav.css"


export default function NavMobile() {
  return (
    <header>
    <nav className="mobileNav">
        <div id="mobileNavCon">
          <div id="navtoggleDiv" onclick="ToggleHam(event)">
            <div class="hamburger" id="ham">
              <div id="bur1"></div>
              <div id="bur2"></div>
              <div id="bur3"></div>
             </div>
          </div>
          <div className="LogoDiv">
            <img src={"./src/assets/FedLogo.png"}></img>
            <p className="LogoFED">FED</p>
          </div>
          <div id="Navdarkright"></div>
        </div>
      </nav>
      <div id="mobileNavList">
        <div class="mobileNavListChild">
          <div class="mobileList">
            <NavLink to="/" className="active">Home</NavLink>
          </div>
          <div class="mobileList">
            <NavLink to="/event" className="liTag">Events</NavLink>
          </div>
          <div class="mobileList">
            <NavLink to="/Podcasts" className="liTag">Podcasts</NavLink>
          </div>
          <div class="mobileList">
            <NavLink to="/Team" className="liTag">Our Team</NavLink> 
          </div>
          <div class="mobileList">
            <NavLink to="/ContactUs" className="liTag">Contact Us</NavLink>
          </div>
        </div>
      </div>
      </header>
  )
}
