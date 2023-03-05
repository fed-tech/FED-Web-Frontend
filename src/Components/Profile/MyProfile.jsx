import React from "react";
import "./cssp/MyProfile.css"
export default function MyProfile() {
    return (
        <div>
            <section id="MyProfile">
                <div className="container">
                    <h3>FED</h3>
                    <div className="signup-div">
                        <div className="signup-card">
                            <h4>Hello there</h4>
                            <h6>Please enter your details</h6>
                            <br /><br />
                            <div className="signup-with">
                                Sigup with Google
                            </div>
                            <br />
                            <p>or</p>
                            <input type="text" placeholder="First Name"/>
                            <hr />
                            <input type="text" placeholder="Last Name"/>
                            <hr />
                            <input type="email" placeholder="Email"/>
                            <hr />
                            <input type="text" placeholder="Password"/>
                            <hr />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}