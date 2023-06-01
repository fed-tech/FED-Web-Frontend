import { ClassNames } from "@emotion/react";
import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Cookies, useCookies } from "react-cookie";
import bcrypt from "bcryptjs-react";
import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';

//  axios
import axios from "axios";

// state
import AuthContext from "./../store/auth-context";

// css
import "../Pages/Css/loginpg.css";

// img
import google from "../Img/Google.svg";

function Login(props) {
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])
  const authCtx = useContext(AuthContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [emailerr, setEmailerr] = useState(false);
  const [passwrderr, setPasswrderr] = useState(false);
  const [passwrd, setPassword] = useState("");
  const [isinValid, setIsinValid] = useState(false);
  const [errmssg, setErrMssg] = useState("Invalid");
  const [cookie, setCookie, removeCookie] = useCookies(["auth_token"]);

  useEffect(() => {
    setIsinValid(false);
    setEmailerr(false);
    setPasswrderr(false);
  }, [email, passwrd]);

  const handlelogin = async (e) => {
    e.preventDefault();
    const username = email;
    if (email === "") {
      setEmailerr(true);
    }
    if (passwrd === "") {
      setPasswrderr(true);
    } else {
      try {
        const password = bcrypt.hashSync(
          passwrd,
          "$2b$10$Q0RPeouqYdTToq76zoccIO"
        );
        console.log(password);
        console.log(document.cookie);
        const response = await axios.post(`http://localhost:5000/auth/login`, {
          username,
          password,
        });
        console.log(response);
        console.log(response.data.result[0].name);
        if (response.data.result[0].access === 1) console.log("admin");
        else console.log("not admin");

        if (response.status === 200) {
          // setCookie("auth_token", response.data.token);
          // props.setIsLoggedIn(true);
          await authCtx.login(
            response.data.result[0].name,
            response.data.result[0].email,
            response.data.result[0].img,
            response.data.result[0].RollNumber,
            response.data.result[0].School,
            response.data.result[0].College,
            response.data.result[0].MobileNo,
            response.data.result[0].selected,
            response.data.token,
            10800000
          );
          navigate("/MyProfile");
          return;
        }
      } catch (err) {
        setIsinValid(true);

        if (err.response.data.code === 4) {
          setErrMssg("Email not verified");
        } else if (err.response.data.code === 2) {
          setErrMssg("Invalid credentials");
        }
        console.log(err);
      }
    }
  };
  const [ user, setUser ] = useState([]);
    const [ profile, setProfile ] = useState([]);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(
        () => {
            if (user) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        setProfile(res.data);
                        console.log(profile);
                    })
                    .catch((err) => console.log(err));
            }
        },
        [ user ]
    );

  return (
    <div className="full">
      <div className="inside">
        <div className="title1">
          <p className="fed">FED</p>
        </div>
        <div className="whitebox">
          <div className="hellopart">
            <p className="welc">Welcome Back</p>
            <p className="det">Please Enter your details</p>
          </div>

            <div className="googlepart" onClick={() => login()}>
          {/* <GoogleOAuthProvider clientId="294536364723-56kfvttecvq2vaspgf6qv6742l4ruj68.apps.googleusercontent.com">

            <GoogleLogin id="custom-login-button"
              onSuccess={credentialResponse => {
                console.log(credentialResponse);
              }}
              onError={() => {
                console.log('Login Failed');
              }}
            />;</GoogleOAuthProvider>; */}

            <img src={google} className="icon"></img>
            <p className="log">Login with Google</p>
          </div>
          <p className="or">Or</p>
          <div className="user">
            <input
              type="text"
              placeholder="Email"
              className="username"
              onChange={(e) => setEmail(e.target.value)}
              style={{
                borderBottom: emailerr ? "2px solid red" : "2px solid black",
              }}
            />
          </div>
          <div className="pass">
            <input
              type="password"
              placeholder="Password"
              className="password"
              onChange={(e) => setPassword(e.target.value)}
              style={{
                borderBottom: passwrderr ? "2px solid red" : "2px solid black",
              }}
            />
          </div>
          <div className="forgotPassword">
            <Link to="/forgotpassword">
              <p>Forgot Password?</p>
            </Link>
          </div>
          <button className="logtwo" onClick={handlelogin}>
            Login
          </button>
          <div className="dont">
            <p className="signup">
              Don't have an account?{" "}
              <Link to="/Signup">
                <span className="spn">Signup</span>
              </Link>
            </p>
            <p id="errmssg" style={{ color: isinValid ? "red" : "white" }}>
              {errmssg}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
