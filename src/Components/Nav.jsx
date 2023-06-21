import React, { useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

// css
import "./css/DesktopNav.css";

// state
import AuthContext from "./../store/auth-context";

// axios
import axios from "axios";

export default function Nav(props) {
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
                <NavLink
                  // to={authCtx.isLoggedIn ? "/MyProfile" : "Signup"}
                  to={authCtx.isLoggedIn ? "/MyProfile/member" : "Signup"}
                  className="liTag"
                >
                  {authCtx.isLoggedIn ? (
                    <img
                      src={authCtx.user.pic}
                      alt=""
                      srcset=""
                      className="profile_img"
                    />
                  ) : (
                    "Login/SignUp"
                  )}
                </NavLink>
              </li>
              {/* <li>
                <NavLink to="/Alumni" className="liTag">
                  Alumni
                </NavLink>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
