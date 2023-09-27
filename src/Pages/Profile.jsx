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
      Profile Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Blanditiis dignissimos consequatur expedita dolores, corporis asperiores
      voluptatum aliquam quae nesciunt itaque, deleniti adipisci, repellendus
      enim! Itaque odio aliquam veniam magnam soluta magni nam quod maxime
      consequatur repudiandae maiores voluptatum quo optio iusto eligendi
      deleniti architecto neque quibusdam ad, atque consectetur est. Et quos
      voluptatem reiciendis ullam laboriosam similique, temporibus id numquam
      nobis cumque voluptatibus nihil quae facilis sint commodi sapiente error
      incidunt corrupti quidem modi alias. Corporis consequatur eos ratione
      quidem, quibusdam quae aliquam explicabo optio eveniet nostrum esse sunt
      odit, numquam vero est ea nisi dolores quaerat velit et blanditiis.
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <p onClick={handleLogout}>Logout</p>
    </div>
  );
}

export default Profile;
