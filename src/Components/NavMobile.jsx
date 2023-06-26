import React, { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";

// css
import "./css/MobileNav.css";

// state
import AuthContext from "./../store/auth-context";

export default function NavMobile() {
  const [count, setCount] = useState(false);

  const authCtx = useContext(AuthContext);

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
              <div
                className="hamburger"
                id="ham"
                onClick={() => setCount(true)}
              >
                <div id="bur1"></div>
                <div id="bur2"></div>
                <div id="bur3"></div>
              </div>
            )}
          </div>

          <Link to="/" className="LinkStyle" onClick={() => setCount(false)}>
            <div className="LogoDiv">
              <img src="https://uploads-ssl.webflow.com/629d87f593841156e4e0d9a4/62eeaa9927e6aea4ff13590e_FedLogo.png"></img>
              <p className="LogoFED">FED</p>
            </div>
          </Link>
          <div id="Navdarkright"></div>
        </div>
      </nav>

      <div className="mobileNavClass" id={count ? "mobileNavList" : "blank"}>
        <div class="mobileNavListChild">
          <div class="mobileList">
            <NavLink to="/" className="liTag" onClick={() => setCount(false)}>
              Home
            </NavLink>
          </div>

          <div class="mobileList" onClick={() => setCount(false)}>
            <NavLink to="/event" className="liTag">
              Events
            </NavLink>
          </div>

          <div class="mobileList">
            <NavLink
              to="/Podcasts"
              className="liTag"
              onClick={() => setCount(false)}
            >
              Podcasts
            </NavLink>
          </div>

          <div class="mobileList">
            <NavLink
              to="/Team"
              className="liTag"
              onClick={() => setCount(false)}
            >
              Our Team
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}
