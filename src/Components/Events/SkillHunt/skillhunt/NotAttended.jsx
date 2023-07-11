import React from "react";

function NotAttended() {
  return (
    <>
      <div class="cardeve" id="div4" data-step>
        <h3 class="step-title h3marginTop">
          How did you get to know event this event?
        </h3>
        <div class="inpDivC">
          <div class="radiobgnDiv">
            <input
              type="radio"
              id="InstagramFirstTeam"
              name="KnowEventFirstTeam"
              value="Instagram"
              required
            />
            <label for="InstagramFirstTeam" class="labelTagInp">
              Instagram
            </label>
          </div>
          <div class="radiobgnDiv">
            <input
              type="radio"
              id="EmailFirstTeam"
              name="KnowEventFirstTeam"
              value="Email"
            />
            <label for="EmailFirstTeam" class="labelTagInp">
              Email
            </label>
            <br />
          </div>
          <div class="radiobgnDiv">
            <input
              type="radio"
              id="FriendsFirstTeam"
              name="KnowEventFirstTeam"
              value="Friends"
            />
            <label for="FriendsFirstTeam" class="labelTagInp">
              Friends
            </label>
          </div>
          <div class="radiobgnDiv">
            <input
              type="radio"
              id="OtherFirstTeam"
              name="KnowEventFirstTeam"
              value="Other"
            />
            <label for="OtherFirstTeam" class="labelTagInp">
              Other
            </label>
          </div>
        </div>
        <p id="toogle-talkshow" class="toogle"></p>
      </div>
    </>
  );
}

export default NotAttended;
