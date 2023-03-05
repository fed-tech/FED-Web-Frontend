import React from "react";
import "./cssp/MyProfile.css"
export default function MyProfile() {
    return (
        <div>
            <section id="MyProfile">
                <div className="container">
                    <h3 className="logo-white">FED</h3>
                    <div className="signup-div">
                        <div className="signup-card">
                            <p className="whiteclass">Hello there</p>
                            <p className="blackclass">Please enter your details</p>
                            <div className="signup-with blackclass">
                                Sigup with Google
                            </div>
                            <br />
                            <p className="blackclass">or</p>
                            <div className="input-padding">
                                <input type="text" placeholder="First Name"/>
                                <hr />
                                <input type="text" placeholder="Last Name"/>
                                <hr />
                                <input type="email" placeholder="Email"/>
                                <hr />
                                <input type="text" placeholder="Password"/>
                                <hr />
                                <button type="submit" className="submit-btn"> Signup</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}