import React, { useState, useContext } from "react";
import { Link, NavLink,useNavigate  } from "react-router-dom";
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
              <p>{import.meta.env.VITE_BETA==="true"?<>Test</>:<></>}</p>
            </div>
          </Link>
          <div id="Navdarkright"></div>
        </div>
      </nav>
      <div className="mobileNavClass" id={count ? "mobileNavList" : "blank"}>
        <div class="mobileListProfile">
          {authCtx.isLoggedIn && (
            <NavLink
              to="/MyProfile"
              className="liTag"
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

        <div class="mobileNavListChild">
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

          <div class="mobileList">
            <NavLink
              // to={authCtx.isLoggedIn ? "/MyProfile" : "Signup"}
              to={authCtx.isLoggedIn ? "/Login" : "/Login"}
              className="liTag"
              onClick={handleLogout}
            >
              {authCtx.isLoggedIn ? (
                "Logout"
              ) : (
                "Login/SignUp"
              )}
            </NavLink>
          </div>

          <div class="mobileList">
            <NavLink
              to="/Alumni"
              className="liTag"
              onClick={() => setCount(false)}
            >
              Alumni
            </NavLink>
          </div>

          {/* <div className="mobileList">
            <NavLink
              to="/Alumni"
              className="liTag"
              onClick={() => setCount(false)}
            >
              Alumni
            </NavLink>
          </div> */}

          {/* <div class="mobileList">
            <HashLink
              to="/#ContactUs"
              className="liTag"
              onClick={() => setCount(false)}
            >
              Contact Us
            </HashLink>
          </div> */}

          

        </div>
      </div>
    </header>
  );
}
