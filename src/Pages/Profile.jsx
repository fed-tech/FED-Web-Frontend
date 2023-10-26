import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

// state
import AuthContext from "./../store/auth-context";

function Profile() {
  const navigate = useNavigate();

  const authCtx = useContext(AuthContext);

  function handleLogout() {
    console.log("logout");
    navigate("/Login");
    authCtx.logout();
  }
  return (
    <div>
      Profile
      <p onClick={handleLogout}>Logout</p>
    </div>
  );
}

export default Profile;
