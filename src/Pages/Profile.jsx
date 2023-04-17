import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Css/Profilecss/profile.css";
import penSvg from "../Img/pen-icon.svg";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
export default function Profile(props) {
  const [users,setUsers]=useState([]);

  const [name, setName] = useState();
  const [roll, setRoll] = useState("");
  const [email, setEmail] = useState("");
  const [year, setYear] = useState("");
  const [school, setSchool] = useState("");
  const [college, setCollege] = useState("");
  const [mobileno, setMobileno] = useState("");
  const [cookie, setCookie, removeCookie] = useCookies(['auth_token']);
  useEffect(()=>{
    console.log("profilepage");
    loadUsers();
  },[]);

  const loadUsers=async()=>{
    const result=await axios.get("http://localhost:5000/profile/getprofile",{withCredentials:true,headers:{
      "auth_token":cookie.auth_token
    }});
    console.log(result.data);
    setEmail(result.data.email);
    setName(result.data.name);
  }

  

  

  const navigate = useNavigate();
  function handleLogout() {
    navigate("/Signup");
    removeCookie('AuthToken');
    props.setIsLoggedIn(false);
  }
  
  return (
    <div className="profileBackground">
      <div className="pmainBox">
        <div className="profileLeft">
          <div className="profile">
            <div className="proHeading">
              <p className="headInnerText">
                <p>Profile Details</p>
                <img src={penSvg} alt="" />
              </p>
            </div>
            <div className="details">
              <div className="keys">
                <p className="dets">Full Name</p>
                <p className="dets">Roll Number</p>
                <p className="dets">Email ID</p>
                <p className="dets">Year</p>
                <p className="dets">School</p>
                <p className="dets">College</p>
                <p className="dets">Mobile No</p>
                <button className="logoutBtn" onClick={handleLogout}>
                    Logout
                </button>
              </div>
              
              <div className="values">
                <p className="vals">{name}</p>
                <p className="vals">{roll}</p>
                <p className="vals">{email}</p>
                <p className="vals">{year}</p>
                <p className="vals">{school}</p>
                <p className="vals">{college}</p>
                <p className="vals">{mobileno}</p>
              </div> 
            </div>
          </div>
        </div>
        <div className="profileRight">
          <p className="illuminating">
            <p>ILLUMINATIING</p>
            <p>THE</p>
            <p>
              <span>ENTREPRENEUR</span>
            </p>
            <p>IN YOU</p>
          </p>
        </div>
      </div>
    </div>
  );
}