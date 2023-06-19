import React from "react";
import { Link } from "react-router-dom";

export default function Member() {
  return (
    <div style={{ backgroundColor: "#000" }}>
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
      Member
      <br />
      <br />
      <br />
      <Link to="/admin/Member/AddMember">Add Member</Link>
      <br />
      <Link to="/admin/Member/ListMember">List Member</Link>
    </div>
  );
}
