import React from "react";

function AttendedEvnt({info,dataInp}) {
  return (
    <>
      <div class="cardeve" id="div3" data-step>
        <h3 class="step-title h3marginTop">Which one?</h3>
        <div class="inpDivC">
          <div class="radiobgnDiv">
            <input
              onChange = {dataInp}
              type="radio"
              id="StonkaholicTeam"
              name="WhichOneTeam"
              value="Stonkaholic"
              required
              checked = {info.WhichOneTeam === "Stonkaholic"}
            />
            <label for="StonkaholicTeam" class="labelTagInp">
              Stonkaholic
            </label>
          </div>
          <div class="radiobgnDiv">
            <input
              onChange = {dataInp}
              type="radio"
              id="PitchersTeam"
              name="WhichOneTeam"
              value="Pitchers"
              checked = {info.WhichOneTeam === "Pitchers"}
            />
            <label for="PitchersTeam" class="labelTagInp">
              Pitchers
            </label>
            <br />
          </div>
          <div class="radiobgnDiv">
            <input
              onChange = {dataInp}
              type="radio"
              id="OmegaTeam"
              name="WhichOneTeam"
              value="Omega"
              checked = {info.WhichOneTeam === "Omega"}
            />
            <label for="OmegaTeam" class="labelTagInp">
              Omega
            </label>
          </div>
          <div class="radiobgnDiv">
            <input
              onChange = {dataInp}
              type="radio"
              id="OtherWhichOneTeam"
              name="WhichOneTeam"
              value="Other"
              checked = {info.WhichOneTeam === "Other"}
            />
            <label for="OtherWhichOneTeam" class="labelTagInp">
              Other
            </label>
          </div>
        </div>
        
        <p id="toogle-talkshow" class="toogle"></p>
      </div>
    </>
  );
}

export default AttendedEvnt;
