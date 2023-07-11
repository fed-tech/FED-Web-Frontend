import React from "react";

// css
import SHCss from "./Css/SkillHunt.module.css";

// img
import skillhuntlogo from "./../../../assets/SkillHunt/skillhuntlogo.png";

export default function SkillHunt() {
  return (
    <div className={SHCss.mDiv}>
      <div className={SHCss.ContDiv}>
        <div className={SHCss.leftDiv}>
          <img src={skillhuntlogo} alt="" />
          <p>
            “Talent you have naturally. Skill is only developed by hours and
            hours and hours of beating on your craft” ~Will Smith
            <br />
            We are thrilled to invite you to be a part of the highly anticipated
            Skill Hunt event organized by FED at KIIT.
            <br />
            Skill Hunt is where individuals like you, with unparalleled
            expertise, come together to showcase their remarkable skills.
            Whether you excel in design, programming, marketing, or any other
            distinctive skill, we want to see what you've got!
            <br />
            We look forward to reviewing your exceptional portfolio. Don't miss
            this chance to connect, receive feedback, and collaborate! Join
            Skill Hunt now and let your talent shine!
          </p>
        </div>
      </div>
    </div>
  );
}
