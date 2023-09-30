import React, { useContext, useEffect, useState } from "react";
import "./cssp/UpdateModal.css";
import AuthContext from "../../store/auth-context";
import axios from "axios";
import UpdateProfileForm from "./UpdateProfileForm";


function updateModal({ setShowUpdateModal }) {
  const authCtx = useContext(AuthContext);

  const [isinValid, setIsinValid] = useState(false);
  const [errmssg, setErrMssg] = useState("Invalid");
  const [showUser, setUser] = useState({
    email: authCtx.user.email,
    name: "",
    RollNumber: "",
    School: "",
    College: "",
    MobileNo: "",
  });

  const [selected, setSelected] = useState(authCtx.user.selected);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const { email, name, RollNumber, School, College, MobileNo } = showUser;
    if (
      name !== "" &&
      RollNumber !== "" &&
      School !== "" &&
      College !== "" &&
      MobileNo !== "" &&
      MobileNo.length <= 12 &&
      MobileNo.length >= 10 &&
      selected !== "Year"
    ) {
      const userObject = {
        name,
        email,
        RollNumber,
        School,
        College,
        MobileNo,
        selected,
      };
      try {
        axios
          .post(`/auth/updateProfile`, userObject)
          .then((res) => {
            if (res.status === 200) {
              const resp = res.data.response;

              authCtx.update(
                resp.name,
                resp.email,
                resp.img,
                resp.RollNumber,
                resp.School,
                resp.College,
                resp.MobileNo,
                resp.selected,
                Number(resp.access)
              );

              // setShowUpdateModal(false);
              window.location.reload();
              return;
            }
          });
      } catch (error) {
        setIsinValid(true);
        if (error.response.data.code === 1) {
          setErrMssg("User already exists");
        }
        if (error.response.data.code === 2) {
          setErrMssg("Invalid email format");
        }

        console.log(error);
      }
    } else {
      if (MobileNo === "" || (MobileNo.length <= 12 && MobileNo.length >= 10)) {
        setIsinValid(true);
        setErrMssg("Please fill all the fields");
      } else {
        setIsinValid(true);
        setErrMssg("Invalid mobile number");
      }
    }
  };
  return (
    <div className="updateModal-overlay">
      <div className="updateModal">
        <h2>Update Profile</h2>
        <form className="update_form">
          <UpdateProfileForm showUser = {showUser} setUser = {setUser} selected = {selected} setSelected = {setSelected}/>
          <button type="submit" className="btn" onClick={handleUpdate}>
            Update Profile
          </button>
          <button
            type="button"
            className="btn"
            onClick={() => setShowUpdateModal(false)}
          >
            Close
          </button>
        </form>
      </div>
    </div>
  );
}

export default updateModal;
