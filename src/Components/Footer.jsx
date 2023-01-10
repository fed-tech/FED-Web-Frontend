import React from "react";
import { Link } from "react-router-dom";
import "./css/Footer.css";

export default function Footer() {
  return (
    <section id="footer">
      <footer className="f1">
        <div className="logodiv">
          <img
            className="fedlogo"
            src={"./src/assets/FedLogo.png"}
            alt="fedlogo"
          />
          <p className="fed">FED</p>
        </div>
        <div className="flexdiv">
          <div className="footerleft">
            <div className="row1">
              <h4>Community</h4>
              {/* ../ContactUs */}
              <Link to="/" className="footerleftlink">
                Contact
              </Link>
              <Link to="/Teampage" className="footerleftlink">
                Member
              </Link>
            </div>
            <div className="row2">
              <h4>About Us</h4>
              {/* ../KnowUs */}
              <Link to="/" className="footerleftlink">
                Manifesto
              </Link>
              {/* ../work */}
              <Link to="/" className="footerleftlink">
                Partner
              </Link>
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
                  src="https://uploads-ssl.webflow.com/629d87f593841156e4e0d9a4/63ad87fc55e11aacde597f36_instagram.png"
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
                  src="https://uploads-ssl.webflow.com/629d87f593841156e4e0d9a4/63ad87fd33698b3915d77ef1_linkedin.png"
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
                  src="https://uploads-ssl.webflow.com/629d87f593841156e4e0d9a4/63ad87fb3ba6d10f3bf1435c_spotify.png"
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
                  src="https://uploads-ssl.webflow.com/629d87f593841156e4e0d9a4/63ad87fa33698b5829d77e9a_youtube.png"
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
