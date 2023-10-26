import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

// css
import "./css/Footer.css";

export default function Footer() {
  return (
    <section id="footer">
      <footer className="f1">
        <div className="logodiv">
          <img
            className="fedlogo"
            src="https://uploads-ssl.webflow.com/629d87f593841156e4e0d9a4/62eeaa9927e6aea4ff13590e_FedLogo.png"
            alt="fedlogo"
          />
          <p className="fed">FED</p>
        </div>
        <div className="flexdiv">
          <div className="footerleft">
            <div className="row1">
              <h4>Community</h4>

              {/* ContactUs */}

              <HashLink to="/#ContactUs" className="footerleftlink">
                Contact
              </HashLink>
              <Link to="/Team" className="footerleftlink">
                Member
              </Link>
              <Link to="/Alumni" className="footerleftlink">
                Alumni
              </Link>
            </div>
            <div className="row2">
              <h4>About Us</h4>

              {/* KnowUs */}
              <HashLink smooth to="/#KnowUs" className="footerleftlink">
                Manifesto
              </HashLink>

              {/* work */}
              <HashLink smooth to="/#work" className="footerleftlink">
                Partner
              </HashLink>
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
                <svg
                  className="iconimg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="2.5"
                    y="2.5"
                    width="35"
                    height="35"
                    rx="7.5"
                    fill="url(#paint0_radial_459_201)"
                  />
                  <rect
                    x="2.5"
                    y="2.5"
                    width="35"
                    height="35"
                    rx="7.5"
                    fill="url(#paint1_radial_459_201)"
                  />
                  <rect
                    x="2.5"
                    y="2.5"
                    width="35"
                    height="35"
                    rx="7.5"
                    fill="url(#paint2_radial_459_201)"
                  />
                  <path
                    d="M28.75 13.125C28.75 14.1605 27.9105 15 26.875 15C25.8395 15 25 14.1605 25 13.125C25 12.0895 25.8395 11.25 26.875 11.25C27.9105 11.25 28.75 12.0895 28.75 13.125Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20 26.25C23.4518 26.25 26.25 23.4518 26.25 20C26.25 16.5482 23.4518 13.75 20 13.75C16.5482 13.75 13.75 16.5482 13.75 20C13.75 23.4518 16.5482 26.25 20 26.25ZM20 23.75C22.0711 23.75 23.75 22.0711 23.75 20C23.75 17.9289 22.0711 16.25 20 16.25C17.9289 16.25 16.25 17.9289 16.25 20C16.25 22.0711 17.9289 23.75 20 23.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.5 19.5C7.5 15.2996 7.5 13.1994 8.31745 11.5951C9.0365 10.1839 10.1839 9.0365 11.5951 8.31745C13.1994 7.5 15.2996 7.5 19.5 7.5H20.5C24.7004 7.5 26.8006 7.5 28.4049 8.31745C29.8161 9.0365 30.9635 10.1839 31.6825 11.5951C32.5 13.1994 32.5 15.2996 32.5 19.5V20.5C32.5 24.7004 32.5 26.8006 31.6825 28.4049C30.9635 29.8161 29.8161 30.9635 28.4049 31.6825C26.8006 32.5 24.7004 32.5 20.5 32.5H19.5C15.2996 32.5 13.1994 32.5 11.5951 31.6825C10.1839 30.9635 9.0365 29.8161 8.31745 28.4049C7.5 26.8006 7.5 24.7004 7.5 20.5V19.5ZM19.5 10H20.5C22.6414 10 24.0972 10.0019 25.2224 10.0939C26.3184 10.1834 26.879 10.3457 27.27 10.545C28.2108 11.0243 28.9757 11.7892 29.455 12.73C29.6543 13.121 29.8166 13.6816 29.9061 14.7776C29.9981 15.9028 30 17.3586 30 19.5V20.5C30 22.6414 29.9981 24.0972 29.9061 25.2224C29.8166 26.3184 29.6543 26.879 29.455 27.27C28.9757 28.2108 28.2108 28.9757 27.27 29.455C26.879 29.6543 26.3184 29.8166 25.2224 29.9061C24.0972 29.9981 22.6414 30 20.5 30H19.5C17.3586 30 15.9028 29.9981 14.7776 29.9061C13.6816 29.8166 13.121 29.6543 12.73 29.455C11.7892 28.9757 11.0243 28.2108 10.545 27.27C10.3457 26.879 10.1834 26.3184 10.0939 25.2224C10.0019 24.0972 10 22.6414 10 20.5V19.5C10 17.3586 10.0019 15.9028 10.0939 14.7776C10.1834 13.6816 10.3457 13.121 10.545 12.73C11.0243 11.7892 11.7892 11.0243 12.73 10.545C13.121 10.3457 13.6816 10.1834 14.7776 10.0939C15.9028 10.0019 17.3586 10 19.5 10Z"
                    fill="white"
                  />
                  <defs>
                    <radialGradient
                      id="paint0_radial_459_201"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(15 28.75) rotate(-55.3758) scale(31.8995)"
                    >
                      <stop stop-color="#B13589" />
                      <stop offset="0.79309" stop-color="#C62F94" />
                      <stop offset="1" stop-color="#8A3AC8" />
                    </radialGradient>
                    <radialGradient
                      id="paint1_radial_459_201"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(13.75 38.75) rotate(-65.1363) scale(28.2428)"
                    >
                      <stop stop-color="#E0E8B7" />
                      <stop offset="0.444662" stop-color="#FB8A2E" />
                      <stop offset="0.71474" stop-color="#E2425C" />
                      <stop offset="1" stop-color="#E2425C" stop-opacity="0" />
                    </radialGradient>
                    <radialGradient
                      id="paint2_radial_459_201"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(0.625002 3.75) rotate(-8.1301) scale(48.6136 10.3979)"
                    >
                      <stop offset="0.156701" stop-color="#406ADC" />
                      <stop offset="0.467799" stop-color="#6A45BE" />
                      <stop offset="1" stop-color="#6A45BE" stop-opacity="0" />
                    </radialGradient>
                  </defs>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/fedkiit/"
                className="link1"
                target="_blank"
              >
                <svg
                  className="iconimg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="2.5"
                    y="2.5"
                    width="35"
                    height="35"
                    rx="7.5"
                    fill="#1275B1"
                  />
                  <path
                    d="M15.7732 12.1152C15.7732 13.2834 14.7606 14.2304 13.5116 14.2304C12.2626 14.2304 11.25 13.2834 11.25 12.1152C11.25 10.947 12.2626 10 13.5116 10C14.7606 10 15.7732 10.947 15.7732 12.1152Z"
                    fill="white"
                  />
                  <path
                    d="M11.5593 15.7851H15.4253V27.5H11.5593V15.7851Z"
                    fill="white"
                  />
                  <path
                    d="M21.6495 15.7851H17.7835V27.5H21.6495C21.6495 27.5 21.6495 23.812 21.6495 21.5061C21.6495 20.122 22.1221 18.7319 24.0077 18.7319C26.1388 18.7319 26.1259 20.5432 26.116 21.9464C26.103 23.7806 26.134 25.6523 26.134 27.5H30V21.3171C29.9673 17.3692 28.9385 15.5501 25.5541 15.5501C23.5442 15.5501 22.2984 16.4626 21.6495 17.2881V15.7851Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a
                href="https://open.spotify.com/show/3s0jcteh4gcNcJeECstoMj?si=G7NjOL73Qxq4K6r3fy_-VA&utm_source=whatsapp&nd=1"
                className="link1"
                target="_blank"
              >
                <svg
                  className="iconimg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20" cy="20" r="17.5" fill="#1ED760" />
                  <path
                    d="M27.9554 27.0287C27.6564 27.5031 27.0186 27.6359 26.5203 27.3513C22.5937 25.0742 17.6705 24.5618 11.8503 25.8142C11.2922 25.9281 10.7341 25.6055 10.6145 25.0742C10.4949 24.5428 10.8338 24.0115 11.3919 23.8976C17.7502 22.5124 23.2116 23.1007 27.5966 25.6624C28.095 25.9471 28.2544 26.5543 27.9554 27.0287ZM29.9885 22.7022C29.6098 23.2904 28.8125 23.4612 28.1946 23.1196C23.7099 20.482 16.8732 19.7229 11.5712 21.26C10.8736 21.4497 10.1561 21.0892 9.95674 20.444C9.75742 19.7798 10.1361 19.0967 10.8338 18.9069C16.8931 17.1611 24.4274 17.9961 29.5899 21.0133C30.1679 21.3549 30.3672 22.1139 29.9885 22.7022ZM30.1679 18.1859C24.7862 15.1497 15.9164 14.865 10.774 16.3452C9.95674 16.5919 9.07973 16.1554 8.82061 15.3584C8.5615 14.5804 9.03987 13.7455 9.85708 13.4988C15.757 11.7909 25.5636 12.1325 31.7425 15.6241C32.48 16.0416 32.7192 16.9524 32.2807 17.6545C31.8621 18.3756 30.9054 18.6223 30.1679 18.1859Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/channel/UC7LjeEyGyr656BU2VpCbCJA"
                className="link1"
                target="_blank"
              >
                <svg
                  className="iconimg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.80563 12.4264C2.9663 9.95291 4.95493 8.01446 7.43058 7.89181C11.0155 7.7142 16.1393 7.5 20 7.5C23.8607 7.5 28.9845 7.7142 32.5694 7.89181C35.0451 8.01446 37.0337 9.95291 37.1944 12.4264C37.3483 14.7962 37.5 17.7121 37.5 20C37.5 22.2879 37.3483 25.2038 37.1944 27.5736C37.0337 30.0471 35.0451 31.9855 32.5694 32.1082C28.9845 32.2858 23.8607 32.5 20 32.5C16.1393 32.5 11.0155 32.2858 7.43058 32.1082C4.95494 31.9855 2.9663 30.0471 2.80563 27.5736C2.6517 25.2038 2.5 22.2879 2.5 20C2.5 17.7121 2.6517 14.7962 2.80563 12.4264Z"
                    fill="#FC0D1B"
                  />
                  <path d="M16.25 15V25L26.25 20L16.25 15Z" fill="white" />
                </svg>
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
        <div className="tnpMDiv">
          <div className="terms_and_policies">
            <div className="tap1Div">
              <Link to="/T&C" className="LinkStyle">
                Terms and conditions
              </Link>
            </div>
            <dv className="dotDIv"></dv>
            <div className="tap1Div">
              <Link to="/PrivacyPolicies" className="LinkStyle">
                Privacy policy
              </Link>
            </div>
          </div>
          <p className="copyrightPTag">© 2019-2023, fedkiit.com</p>
        </div>
      </footer>
    </section>
  );
}
