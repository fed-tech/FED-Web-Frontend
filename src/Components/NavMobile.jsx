import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./css/MobileNav.css";

export default function NavMobile() {
  const [count, setCount] = useState(false);
  function toggleEvent() {
    setCount(true);
  }
  return (
    <header>
      <nav className="mobileNav">
        <div id="mobileNavCon">
          <div id="navtoggleDiv">
            {count ? (
              <div onClick={() => setCount(false)}>
                <p className="Cross">X</p>
              </div>
            ) : (
              <div className="hamburger" id="ham" onClick={toggleEvent}>
                <div id="bur1"></div>
                <div id="bur2"></div>
                <div id="bur3"></div>
              </div>
            )}
          </div>
          <div className="LogoDiv">
            <img src="https://uploads-ssl.webflow.com/629d87f593841156e4e0d9a4/62eeaa9927e6aea4ff13590e_FedLogo.png"></img>
            <p className="LogoFED">FED</p>
          </div>
          <div id="Navdarkright"></div>
        </div>
      </nav>
      <div className="mobileNavClass" id={count ? "mobileNavList" : "blank"}>
        <div class="mobileNavListChild">
          <div class="mobileList">
            <NavLink to="/" className="liTag">
              Home
            </NavLink>
          </div>
          <div class="mobileList">
            <NavLink to="/event" className="liTag">
              Events
            </NavLink>
          </div>
          <div class="mobileList">
            <NavLink to="/Podcasts" className="liTag">
              Podcasts
            </NavLink>
          </div>
          <div class="mobileList">
            <NavLink to="/Team" className="liTag">
              Our Team
            </NavLink>
          </div>
          <div class="mobileList">
            <NavLink to="/" className="liTag">
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}
