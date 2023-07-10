import React, { useState } from "react";

function PopUp2({dataInp,info}) {
    const[inOtherSociety,setInOtherSociety] = useState(false);
    const yes = ()=>{
        setInOtherSociety(true)

    }
    const no = ()=>{
        setInOtherSociety(false)

    }
  return (
    <>
      <div className = "cardeve" id="div1_2" data-step-1>
        <h3 className = "step-title">Mention Your Branch</h3>
        <div className = "form-group">
          <div className = "popTDiv">
            <input onChange = {dataInp}
              type="text"
              name="branch"
              className = "inpTagPry inpInRow"
              id="WhichBranch"
              placeholder="ex:Cse"
              required
              value={info.branch}
            />
          </div>
          <h3 className = "step-title h3marginTop">
            Which year are you studying in?
          </h3>
          <div className = "popTDiv">
            <input onChange = {dataInp}
              type="number"
              className = "inpTagPry"
              id="whichYear"
              placeholder="Year"
              maxlength="1"
              required
              name="year"
              value={info.year}
            />
          </div>
          <h3 className = "step-title h3marginTop">
            Departments you are interested in
          </h3>
          <div className = "inpDivC">
            <div className = "radiobgnDiv">
              <input onChange = {dataInp}
                type="radio"
                id="ops"
                name="department"
                value="Operation"
                checked = {info.department === "Operation"}
                required
              />
              <label for="ops" className = "labelTagInp">
                Operation
              </label>
            </div>
            <div className = "radiobgnDiv">
              <input onChange = {dataInp}
                type="radio"
                id="tech"
                name="department"
                value="Technical"
                checked = {info.department === "Technical"}
                required
              />
              <label for="tech" className = "labelTagInp">
                Technical
              </label>
              <br />
            </div>
            <div className = "radiobgnDiv">
              <input onChange = {dataInp}
                type="radio"
                id="market"
                name="department"
                value="Marketing"
                checked = {info.department === "Marketing"}
                required
              />
              <label for="market" className = "labelTagInp">
                Marketing
              </label>
            </div>
            <div className = "radiobgnDiv">
              <input onChange = {dataInp}
                type="radio"
                id="creative"
                name="department"
                value="Creative"
                checked = {info.department === "Creative"}
                required
              />
              <label for="creative" className = "labelTagInp">
                Creative
              </label>
            </div>
          </div>
          <h3 className = "step-title h3marginTop">
            Mention your previous experience in chosen fields.
          </h3>
          <div className = "popTDiv">
            <input onChange = {dataInp}
              type="text"
              name="experience"
              id="experience"
              className = "inpTagPry inpInRow"
              placeholder="ex: i have experience on web development.... "
              value={info.experience}
            />
          </div>
          <h3 className = "step-title h3marginTop">Are you in any other society?</h3>

          <div className = "attendedFED">
            <button type="button" id="yes" className = "Going" onClick={yes} style={{backgroundColor:inOtherSociety&&"#f45725"}}>
              Yes
            </button>
            <button type="button" id="no" className = "Going" onClick={no} style={{backgroundColor:!inOtherSociety&&"#f45725"}}>
              No
            </button>
            {inOtherSociety&&<input onChange = {dataInp}
              type="text"
              name="society"
              id="society"
              className = "inpTagPry inpInRow"
              placeholder="Mention society name"
              value={info.society}
            />}
          </div>
          <p id="toogle-talkshow" className = "toogle"></p>
        </div>
      </div>
    </>
  );
}

export default PopUp2;
