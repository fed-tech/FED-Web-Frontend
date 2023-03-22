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
                                Sigup with Google
                            </p>
                            <br />
                            
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}