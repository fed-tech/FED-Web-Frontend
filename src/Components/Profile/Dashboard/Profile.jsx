import React, { useContext, useState } from "react";
import "../../css/Profile/profile.css";
// import penSvg from "../../../Img/pen-icon.svg";
import "../../css/Profile/profile2.css";
import UpdateProfile from "../UpdateProfile";
import AuthContext from "../../../store/auth-context";
import Load from "../../../MicroInterAction/Load";
import { Alert } from "../../../MicroInterAction/Alert";

function Profile() {

  const authCtx = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editing, setEditing] = useState(false); 
  const [variants, setError] = useState({
    mainColor: "",
    secondaryColor: "",
    symbol: "",
    title: "",
    text: "",
    val: false,
  });


  const handleEdit = () => {

    setEditing(true);
    setIsModalOpen(true)
    setTimeout(() => {
      setEditing(false);
    }, 1000);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div id="profile">
      <div className="proHeading">
        <p className="headInnerText">
          <p>Profile Details</p>
        </p>
      </div>
      <div className="details">
        <table className="profileTable">
          <tbody>
            <tr>
              <td className="dets1">Full Name</td>
              <td className="vals1">{authCtx.user.name}</td>
            </tr>
            <tr>
              <td className="dets1">Roll Number</td>
              <td className="vals1">{authCtx.user.rollNo}</td>
            </tr>
            <tr>
              <td className="dets1">Email ID</td>
              <td className="vals1">{authCtx.user.email}</td>
            </tr>
            <tr>
              <td className="dets1">Year</td>
              <td className="vals1">{authCtx.user.selected}</td>
            </tr>
            <tr>
              <td className="dets1">School</td>
              <td className="vals1">{authCtx.user.school}</td>
            </tr>
            <tr>
              <td className="dets1">College</td>
              <td className="vals1">{authCtx.user.college}</td>
            </tr>
            <tr>
              <td className="dets1">Mobile No</td>
              <td className="vals1">{authCtx.user.mobileNo}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <button className="editBtn" onClick={handleEdit}>
          {editing ? <Load /> : "Edit"}
        </button>

        {/* Render modal if isModalOpen is true */}
        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <UpdateProfile setError={setError} />
            </div>
          </div>
        )}
      </div>
      <Alert variant={variants} val={setError} />
    </div>
  );
}

export default Profile;
