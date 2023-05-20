import React, { useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

// css
import "./css/DesktopNav.css";

// state
import AuthContext from "./../store/auth-context";

// axios
import axios from "axios";

// import { useCookies } from "react-cookie";
// import { UserContext } from "../../context/userContext";

export default function Nav(props) {
  const authCtx = useContext(AuthContext);

  // const [cookie, setCookie, removeCookie] = useCookies(["auth_token"]);
  // const { userDetails, setUserDetails } = useContext(UserContext);
  // const validate = async () => {
  //   const result = await axios.get("http://localhost:5000/profile/getprofile", {
  //     withCredentials: true,
  //     headers: {
  //       auth_token: cookie.auth_token,
  //     },
  //   });
  //   setUserDetails(result.data);
  //   const success = result.status === 200;
  //   if (success) {
  //     props.setIsLoggedIn(true);
  //   }
  // };
  // useEffect(() => {
  //   validate();
  // }, []);
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
              {/* <li>
                <HashLink to="/#ContactUs" className="liTag">
                  Contact Us
                </HashLink>
              </li> */}
              <li>
                <NavLink
                  to={authCtx.isLoggedIn ? "/MyProfile" : "Signup"}
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
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}