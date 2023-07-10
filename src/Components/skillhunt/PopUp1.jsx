import React from "react";

function PopUp1({ dataInp, info }) {
  return (
    <>
      <div className="cardeve" id="div1" data-step>
        <h3 className="step-title">Basic Details</h3>
        <div className="form-group">
          {/* <div className="popTDiv">
            <input
              onChange={dataInp}
              type="text"
              name="firstName"
              className="inpTagPry inpInRow"
              id="firstName"
              placeholder="First Name"
              required
              value={info.firstName}
            />
            <input
              onChange={dataInp}
              type="text"
              name="lastName"
              className="inpTagPry inpInRow"
              id="LastName"
              value={info.lastName}
              placeholder="Last Name"
              required
            />
          </div> */}
          {/* <h3 className="step-title h3marginTop">Whatsapp Number</h3>
          <div className="popTDiv">
            <input
              onChange={dataInp}
              type="number"
              name="ContactNumber"
              className="inpTagPry"
              id="MobNumber"
              placeholder="Contact Number"
              minlength="10"
              maxlength="10"
              required
              value={info.ContactNumber}
            />
          </div> */}
          <h3 className="step-title h3marginTop">Age</h3>
          <div className="popTDiv">
            <input
              onChange={dataInp}
              type="number"
              name="age"
              className="inpTagPry"
              id="age"
              placeholder="Age"
              required
              value={info.age}
            />
          </div>
          {/* <h3 className="step-title h3marginTop">E-mail</h3>
          <div className="popTDiv">
            <input
              onChange={dataInp}
              type="email"
              name="email"
              id="mail"
              className="inpTagPry inpInRow"
              placeholder="email@xyz.com"
              required
              value={info.email}
            />
          </div> */}
          <h3 className="step-title h3marginTop">Preferred Skill To Teach</h3>
          <div className="popTDiv">
            <input
              onChange={dataInp}
              type="text"
              name="skillToTeach"
              id="skillToTeach"
              className="inpTagPry inpInRow"
              placeholder="Preferred Skill To Teach"
              required
              value={info.skillToTeach}
            />
          </div>
          <h3 className="step-title h3marginTop">Social Media Link (If Any)</h3>
          <div className="popTDiv">
            <input
              onChange={dataInp}
              type="text"
              name="socialMedia"
              id="social"
              className="inpTagPry inpInRow"
              placeholder="Instagram/LinkedIn/GitHub"
              value={info.socialMedia}
            />
          </div>
          {/* <h3 className="step-title h3marginTop">You are from the School of</h3>
          <div className="popTDiv">
            <input
              onChange={dataInp}
              type="text"
              name="school"
              id="InstitutionName"
              className="inpTagPry inpInRow"
              placeholder="ex: Electronics"
              required
              value={info.school}
            />
          </div> */}
          <p id="toogle-talkshow" className="toogle"></p>
        </div>
      </div>
    </>
  );
}

export default PopUp1;
