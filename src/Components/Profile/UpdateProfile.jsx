import React, { useContext, useState } from "react";
import "./cssp/UpdateModal.css";
import AuthContext from "../../store/auth-context";
import axios from "axios";
import UpdateProfileForm from "./UpdateProfileForm";
import Load from "../../MicroInterAction/Load";

function UpdateModal({setError}) {
  const authCtx = useContext(AuthContext);

  const [isinValid, setIsinValid] = useState(false);
  const [update, setUpdate] = useState(false);

  const [showUser, setShowUser] = useState({
    email: authCtx.user.email,
    name: authCtx.user.name,
    RollNumber: authCtx.user.rollNo,
    School: authCtx.user.school,
    College: authCtx.user.college,
    MobileNo: authCtx.user.mobileNo,
  });

  const [selected, setSelected] = useState(authCtx.user.selected);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setUpdate(true);
    const { email, name, RollNumber, School, College, MobileNo } = showUser;
    setTimeout(() => {
      setUpdate(false);
    }, 1000);
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
        const res = await axios.post(`/auth/updateProfile`, userObject);
        console.log("status : ",res.status);
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

          setError({
            mainColor: "pink",
            secondaryColor: "orange",
            symbol: "pets",
            title: "Success",
            text: "Details Updated Successfully",
            val: true,
          });
          setTimeout(() => {
            window.location.reload();
          }, 1500);
        }

      } catch (error) {
        setIsinValid(true);
        console.log("status : ",res.status);
        if (error.response.data.code === 1) {
          return setError({
            mainColor: "#FFC0CB",
            secondaryColor: "#FF69B4",
            symbol: "error",
            title: "Server Error",
            text: "User already exists",
            val: true,
          });
        }
      }
    } else {
      if (MobileNo === "" || (MobileNo.length <= 12 && MobileNo.length >= 10)) {
        setIsinValid(true);
        return setError({
          mainColor: "#FFC0CB",
          secondaryColor: "#FF69B4",
          symbol: "error",
          title: "Validation Error",
          text: "Please fill all the fields",
          val: true,
        });
      } else {
        setIsinValid(true);
        return setError({
          mainColor: "#FFC0CB",
          secondaryColor: "#FF69B4",
          symbol: "error",
          title: "Validation Error",
          text: "Invalid mobile number",
          val: true,
        });
      }
    }
  };

  return (
    <div className="updateModal-overlay">
      <div className="updateModal">
        <h2>Update Profile</h2>
        <form className="update_form">
          <UpdateProfileForm
            showUser={showUser}
            setShowUser={setShowUser}
            selected={selected}
            setSelected={setSelected}
          />
          <button type="submit" className="btn" onClick={handleUpdate}>
            {update ? <Load /> : "Update"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateModal;
