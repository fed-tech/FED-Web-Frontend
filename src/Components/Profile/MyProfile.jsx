import React from "react";
import "./cssp/MyProfile.css"
export default function MyProfile() {
    return (
        <div>
            <section id="MyProfile">
                <div className="container">
                    <h3 id="logo-white">FED</h3>
                    <div className="signup-div">
                        <div className="signup-card">
                            <p className="whiteclass">Hello there</p>
                            <p className="blackclass">Please enter your details</p>
                            <p className="signup-with">
                                Singup with Google
                            </p>
                            <br />
                            <p className="p1 font-generic">Or</p>
                            <input type="text" placeholder="First Name" className="font-generic inputs in1"/>
                            <hr className="hrs hr1"/>
                            <input type="text" placeholder="Last Name" className="font-generic inputs in2"/>
                            <hr className="hrs hr2"/>
                            <input type="email" placeholder="Email" className="font-generic inputs in3"/>
                            <hr className="hrs hr3"/>
                            <input type="text" placeholder="Password" className="font-generic inputs in4"/>
                            <hr className="hrs hr4"/>
                            <button type="submit" className="submit-btn font-generic">Signup</button>
                            <p className="p2 font-generic">Already a member? <span>Login</span></p>
                            </div>
                            <div className="padding"></div>
                    </div>
                </div>
            </section>
        </div>
    );
}