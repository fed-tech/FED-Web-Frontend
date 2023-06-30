import React, { useState } from "react";

// Components
import Youtube from "./Youtube";

// style
import "./Css/podcasts.css";

function Main() {
  const [goToYoutube, setGoToYoutube] = useState(false);

  function newState() {
    setGoToYoutube(true);
    window.scrollTo(0, 0);
  }

  return (
    <>
      <section
        id="podcasts"
        style={goToYoutube ? { display: "none" } : { display: "block" }}
      >
        <div className="KnowUsmDiv">
          <div className="coverTitle">
            <p className="para1">
              The <span className="para2">FedPreneur</span> Show.
            </p>
          </div>
          <p className="para3">
            The FEDpreneur Show is our podcast series in which we host India's
            most successful entrepreneurs and strive to uncover their secrets to
            success, learning, and entertainment! Every conversation on The
            FEDpreneur Show offers intellectual, educational, and extreme
            learning opportunities to the audience. It's about a visionary
            entrepreneur session with a group of multi-talented and experienced
            business owners. It would aid our young brains to stand strong in
            marketing and startup endeavors with our podcasts at "The FEDpreneur
            Show," where we host India's best success stories and aim to dig out
            their secrets to success, learning, and enjoyment!
          </p>
          <button className="cover-btn" onClick={newState}>
            Tune in Now
          </button>
        </div>
      </section>
      <section
        id="goToYoutube"
        style={goToYoutube ? { display: "block" } : { display: "none" }}
      >
        <Youtube />
      </section>
    </>
  );
}
export default Main;
