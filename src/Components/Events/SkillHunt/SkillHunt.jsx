import React from "react";

// Components
import RegBtn from "./SkillHuntPage";

// css
import SHCss from "./Css/SkillHunt.module.css";

// img
import skillhuntlogo from "./../../../assets/SkillHunt/skillhuntlogo.png";

export default function SkillHunt() {
  return (
    <div className={SHCss.mDiv}>
      <div className={SHCss.ContDiv}>
        <div className={SHCss.leftDiv}>
          <img src={skillhuntlogo} alt="" className={SHCss.ImgTagSkillTag} />
          <div>
            <RegBtn />
          </div>
        </div>
        <div className={SHCss.parentRight}>
          <div className={SHCss.rightDiv}>
            <p>
              <i>
                <b>
                  “Talent you have naturally. Skill is only developed by hours
                  and hours and hours of beating on your craft” ~Will Smith
                </b>
              </i>
              <br />
              <br />
              We are thrilled to invite you to be a part of the highly
              anticipated <b>Skill Hunt</b> event organized by <b>FED</b> at
              KIIT.
              <br />
              <br />
              Skill Hunt is where individuals like you, with unparalleled
              expertise, come together to showcase their remarkable skills.
              Whether you excel in{" "}
              <b>
                design, programming, marketing, or any other distinctive skill
              </b>
              , we want to see what you've got!
              <br />
              <br />
              We look forward to reviewing your exceptional portfolio. Don't
              miss this chance to connect, receive feedback, and collaborate!
              Join Skill Hunt now and let your talent shine!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
