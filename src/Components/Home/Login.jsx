import { ClassNames } from "@emotion/react";
import React from "react";
import "./css/loginpg.css";

function Login(){
    return(
        <div className="cover">
            <h3>Welcome Back</h3>
            <h5>Please Enter your Details</h5>
            
            <input type="text" placeholder="email" />
            <input type="password" placeholder="password" />
        </div>

    )
}
export default Login;
