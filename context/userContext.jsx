import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

export const UserContext = createContext([]);

export const UserContextProvider = ({ children }) => {
  // const [cookie, setCookie, removeCookie] = useCookies(["auth_token"]);

  const [userDetails, setUserDetails] = useState([]);
  // const loadData = async ()=>{
  //   const result = await axios.get("http://localhost:5000/profile/getprofile", {
  //     withCredentials: true,
  //     headers: {
  //       auth_token: cookie.auth_token,
  //     },
  //   });
  //   console.log(result.data);
  //   setUserDetails(result.data);
  // }
  // useEffect(()=>{
  //   loadData()
  // },[])

  return (
      <UserContext.Provider value={{ userDetails,setUserDetails }}>
        {children}
      </UserContext.Provider>
  );
};
