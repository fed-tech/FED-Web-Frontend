import React, { useContext, useState } from "react";
import "./cssp/UpdateModal.css";
import AuthContext from "../../store/auth-context";
import axios from "axios";
import UpdateProfileForm from "./UpdateProfileForm";
import Load from "../../MicroInterAction/Load";
import { Alert } from "../../MicroInterAction/Alert";

function UpdateModal() {
  const authCtx = useContext(AuthContext);

  const [isinValid, setIsinValid] = useState(false);
  const [errmssg, setErrMssg] = useState("Invalid");
  const [update, setUpdate] = useState();
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
        axios.post(`/auth/updateProfile`, userObject).then((res) => {
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

            // setError({
            //   mainColor: "pink",
            //   secondaryColor: "orange",
            //   symbol: "check",
            //   title: "Success",
            //   text: "Details Updated successfully!",
            //   val: true,
            // });

            window.location.reload();
            
            return;
          }
        });
      } catch (error) {
        setIsinValid(true);
        if (error.response.data.code === 1) {
          setErrMssg("User already exists");
          // setError({
          //   mainColor: "#FFC0CB",
          //   secondaryColor: "#FF69B4",
          //   symbol: "check",
          //   title: "Server Error",
          //   text: "User already exits",
          //   val: true,
          // });
        }
        if (error.response.data.code === 2) {
          setErrMssg("Invalid email format");
        }
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
