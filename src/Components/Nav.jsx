import React from "react";
import { NavLink } from "react-router-dom";
import "./css/DesktopNav.css";

export default function Nav() {
  return (
    <header className="Navigation">
      <nav className="desktopNav">
        <div className="navmDiv">
          <div className="LogoDiv">
            <img src={"./src/assets/FedLogo.png"}></img>
            <p className="LogoFED">FED</p>
          </div>
          <div className="listDiv">
            <ul id="NavUl">
              <li>
                <NavLink to="/" className="liTag">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/event" className="liTag">
                  Events
                </NavLink>
              </li>
              <li>
                <NavLink to="/Podcasts" className="liTag">
                  Podcasts
                </NavLink>
              </li>
              <li>
                <NavLink to="/Team" className="liTag">
                  Our Team
                </NavLink>
              </li>
              <li>
                <NavLink to="/ContactUs" className="liTag">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
