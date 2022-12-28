import React from "react";
import "./Css/Footer.css";

export default function Footer() {
  return (
    <section id="footer">
      <footer className="f1">
        <div className="logodiv">
          <img
            className="fedlogo"
            src="https://feddeploy.pages.dev/Img/FedLogo.png"
            alt="fedlogo"
          />
          <p className="fed">FED</p>
        </div>
        <div className="flexdiv">
          <div className="footerleft">
            <div className="row1">
              <h4>Community</h4>
              <a href="./" className="footerleftlink">
                Contact
              </a>
              <a href="./" className="footerleftlink">
                Member
              </a>
            </div>
            <div className="row2">
              <h4>About Us</h4>
              <a href="./" className="footerleftlink">
                Manifesto
              </a>
              <a href="./" className="footerleftlink">
                Partner
              </a>
            </div>
            <div className="row3"></div>
          </div>
          <div className="footerright">
            <h4 className="social">Social</h4>
            <div className="icondiv">
              <a
                href="https://www.instagram.com/fedkiit/"
                className="link1"
                target="_blank"
              >
                <img
                  src="https://feddeploy.pages.dev/Img/instagram.png"
                  alt="instaimg"
                  className="iconimg"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/fedkiit/"
                className="link1"
                target="_blank"
              >
                <img
                  src="https://feddeploy.pages.dev/Img/linkedin.png"
                  alt="linkedinimg"
                  className="iconimg"
                />
              </a>
              <a
                href="https://open.spotify.com/show/3s0jcteh4gcNcJeECstoMj?si=G7NjOL73Qxq4K6r3fy_-VA&utm_source=whatsapp&nd=1"
                className="link1"
                target="_blank"
              >
                <img
                  src="https://fedkiit.com/Img/spotify.png"
                  alt="spotifyimg"
                  className="iconimg"
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UC7LjeEyGyr656BU2VpCbCJA"
                className="link1"
                target="_blank"
              >
                <img
                  src="https://fedkiit.com/Img/youtube.png"
                  alt="youtubeimg"
                  className="iconimg"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="bottomdiv">
          <div className="bottomleft">
            <p>
              Made with❤️
              <br />
              from Federation of Entrepreneurship Development
            </p>
          </div>
          <div className="bottomright">
            <p>
              To boost the confidence of aspiring entrepreneurs worldwide.
              <br />
              Together we can change the world.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
