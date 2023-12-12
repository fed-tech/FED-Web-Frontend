import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";

// state
import AuthContext from "./../store/auth-context";

// css
import "./css/DesktopNav.css";

export default function Nav() {
  const authCtx = useContext(AuthContext);

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
                <NavLink to="/" className="LinkStyle">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/event" className="LinkStyle">
                  Events
                </NavLink>
              </li>
              <li>
                <NavLink to="/Podcasts" className="LinkStyle">
                  Podcasts
                </NavLink>
              </li>
              <li>
                <NavLink to="/Team" className="LinkStyle">
                  Our Team
                </NavLink>
              </li>
              <li>
                {authCtx.isLoggedIn ? (
                  <NavLink to="/MyProfile" className="LinkStyle">
                    <img
                      src={authCtx.user.pic}
                      alt=""
                      srcset=""
                      className="profile_img"
                    />
                  </NavLink>
                ) : (
                  <NavLink to="/Login" className="LinkStyle">
                    Login/SignUp
                  </NavLink>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
