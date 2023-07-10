import React from "react";

function AttendedEvnt({ info, dataInp }) {
  return (
    <>
      <div class="cardeve" id="div3" data-step>
        <h3 class="step-title h3marginTop">Which one?</h3>
        <div class="inpDivC">
          <div class="radiobgnDiv">
            <input
              onChange={dataInp}
              type="radio"
              id="StonkaholicTeam"
              name="previousEvent"
              value="Omega"
              required
              checked={info.previousEvent === "Omega"}
            />
            <label for="StonkaholicTeam" class="labelTagInp">
              Omega
            </label>
          </div>
          {/* <div class="radiobgnDiv">
            <input
              onChange={dataInp}
              type="radio"
              id="PitchersTeam"
              name="previousEvent"
              value="Pitchers"
              checked={info.previousEvent === "Pitchers"}
            />
            <label for="PitchersTeam" class="labelTagInp">
              Pitchers
            </label>
            <br />
          </div>
          <div class="radiobgnDiv">
            <input
              onChange={dataInp}
              type="radio"
              id="OmegaTeam"
              name="WhichOneTeam"
              value="Omega"
              checked={info.WhichOneTeam === "Omega"}
            />
            <label for="OmegaTeam" class="labelTagInp">
              Omega
            </label>
          </div> */}
          <div class="radiobgnDiv">
            <input
              onChange={dataInp}
              type="radio"
              id="OtherWhichOneTeam"
              name="previousEvent"
              value="BlockChain"
              checked={info.previousEvent === "BlockChain"}
            />
            <label for="OtherWhichOneTeam" class="labelTagInp">
              Block Chain
            </label>
          </div>
          <div class="radiobgnDiv">
            <input
              onChange={dataInp}
              type="radio"
              id="OtherWhichOneTeam"
              name="previousEvent"
              value="Other"
              checked={info.previousEvent === "Other"}
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
