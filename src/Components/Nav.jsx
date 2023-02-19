import React from "react";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./css/DesktopNav.css";

export default function Nav() {
  return (
    <header className="Navigation">
      <nav className="desktopNav">
        <div className="navmDiv">
          <Link to="/" className="LinkStyle">
            <div className="LogoDiv">
              <img src="https://uploads-ssl.webflow.com/629d87f593841156e4e0d9a4/62eeaa9927e6aea4ff13590e_FedLogo.png"></img>
              <p className="LogoFED">FED</p>
            </div>
          </Link>
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
                <NavLink to="/Alumni" className="liTag">
                Alumni
                </NavLink>
              </li>
              <li>
                <HashLink to="/#ContactUs" className="liTag">
                  Contact Us
                </HashLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
