import React from "react";
import {signInWithGoogle} from "../Firebase";

export default function Home()
{
    return (
        <div>
            <img style={{maxWidth:"100%",height:"auto"}} src="https://www.freecodecamp.org/news/content/images/size/w2000/2022/03/pexels-rodnae-productions-7581108.jpg" alt="main"/>
            <h2>Tohyo, An Online Voting Platform</h2>
            <button class="login-with-google-btn" onClick={signInWithGoogle}>
                Sign in with Google
            </button>
            <h1>{localStorage.getItem("name")}</h1>
            <h1>{localStorage.getItem("email")}</h1>
            {/* <img src={localStorage.getItem("profilePic")} alt="" /> */}
        </div>
        
    );
}