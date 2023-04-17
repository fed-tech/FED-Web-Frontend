import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./css/DesktopNav.css";
import axios from "axios";
import { useCookies } from "react-cookie";

export default function Nav(props) {
  const [cookie, setCookie, removeCookie] = useCookies(['auth_token']);
  const validate = async()=>{
    const result=await axios.get("http://localhost:5000/profile/getprofile",{withCredentials:true,headers:{
      "auth_token":cookie.auth_token
    }});
    const success = result.status === 200;
    if(success)
    {
      props.setIsLoggedIn(true);
    }
    
  }
  useEffect(()=>{
    validate();
  },[])
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
                <HashLink to="/#ContactUs" className="liTag">
                  Contact Us
                </HashLink>
              </li>
              <li>
                <NavLink to={props.isLoggedIn?"/MyProfile":"Signup"} className="liTag">
                  {props.isLoggedIn?"MyProfile":"Login/SignUp"}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
