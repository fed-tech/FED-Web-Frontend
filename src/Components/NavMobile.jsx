import React, { useState, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

// css
import "./css/MobileNav.css";

// state
import AuthContext from "./../store/auth-context";

export default function NavMobile(props) {
  const [count, setCount] = useState(false);

  function toggleEvent() {
    setCount(true);
  }
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/Login");
    authCtx.logout();
  };
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

          <Link to="/" className="LinkStyle" onClick={() => setCount(false)}>
            <div className="LogoDiv">
              <img src="https://uploads-ssl.webflow.com/629d87f593841156e4e0d9a4/62eeaa9927e6aea4ff13590e_FedLogo.png"></img>
              <p className="LogoFED">FED</p>
              <p>{import.meta.env.VITE_BETA === "true" ? <>Test</> : <></>}</p>
            </div>
          </Link>

          <div id="Navdarkright"></div>
        </div>
      </nav>

      <div className="mobileNavClass" id={count ? "mobileNavList" : "blank"}>
        <div className="mobileListProfile">
          {authCtx.isLoggedIn && (
            <NavLink
              to="/MyProfile"
              className="liTag LinkStyle"
              onClick={() => setCount(false)}
            >
              <img
                src={authCtx.user.pic}
                alt=""
                srcset=""
                className="profile_img"
              />
              <div className="username">{authCtx.user.name}</div>
            </NavLink>
          )}
        </div>

        <div className="mobileNavListChild">
          <div className="mobileList" onClick={() => setCount(false)}>
            <NavLink to="/omega" className="liTag LinkStyle">
              Omega 3.0
            </NavLink>
            <div className="NavNewMobo" id="newEvent">
              <div className="NavMoboArrow"></div>
              <p className="NavNew">New</p>
            </div>
          </div>
          <div className="mobileList" onClick={() => setCount(false)}>
            <NavLink to="/event" className="liTag LinkStyle">
              Events
            </NavLink>
          </div>
          <div className="mobileList">
            <NavLink
              to="/Podcasts"
              className="liTag LinkStyle"
              onClick={() => setCount(false)}
            >
              Podcasts
            </NavLink>
          </div>
          <div className="mobileList">
            <NavLink
              to="/Team"
              className="liTag LinkStyle"
              onClick={() => setCount(false)}
            >
              Our Team
            </NavLink>
          </div>

          {/* <div className="mobileList">
            <NavLink
              // to={authCtx.isLoggedIn ? "/MyProfile" : "Signup"}
              to={authCtx.isLoggedIn ? "/Login" : "/Login"}
              className="liTag LinkStyle"
              // onClick={handleLogout}//
              onClick={() => setCount(false)}
            >
              {authCtx.isLoggedIn ? (
                "Logout"
              ) : (
                "Login/SignUp"
              )}
            </NavLink>
          </div> */}
          <div className="mobileList">
            <NavLink
              to={authCtx.isLoggedIn ? "/Login" : "/Login"}
              className="liTag LinkStyle"
              onClick={() => {
                if (authCtx.isLoggedIn) {
                  authCtx.logout(); // assuming you have a logout method in your auth context
                  history.push("/"); // redirect to home page
                } else {
                  setCount(false);
                }
              }}
            >
              {authCtx.isLoggedIn ? "Logout" : "Login/SignUp"}
            </NavLink>
          </div>

          {/* <div className="mobileList">
            <NavLink
              to="/Alumni"
              className="liTag LinkStyle"
              onClick={() => setCount(false)}
            >
              Alumni
            </NavLink>
          </div> */}

          {/* <div className="mobileList">
            <NavLink
              to="/Alumni"
              className="liTag LinkStyle"
              onClick={() => setCount(false)}
            >
              Alumni
            </NavLink>
          </div> */}

          {/* <div className="mobileList">
            <HashLink
              to="/#ContactUs"
              className="liTag LinkStyle"
              onClick={() => setCount(false)}
            >
              Contact Us
            </HashLink>
          </div> */}
          <div className="mobileList">
            {/* <NavLink
              // to={authCtx.isLoggedIn ? "/MyProfile" : "Signup"}
              to={authCtx.isLoggedIn ? "/MyProfile/member" : "Register"}
              className="liTag LinkStyle"
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
            </NavLink> */}
          </div>
          <div className="mobileList">
            {/* <NavLink
              to="/Alumni"
              className="liTag LinkStyle"
              onClick={() => setCount(false)}
            >
              Alumni
            </NavLink> */}
          </div>
        </div>
      </div>
    </header>
  );
}
