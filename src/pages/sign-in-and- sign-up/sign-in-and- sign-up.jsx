import React from "react";
import './sign-in-and- sign-up.style.css';
import SignIn from "../../components/sign-in/sign-in.component";
import { useNavigate } from "react-router";
import SignUp from "../../components/sign-up/sign-up.component";

const SignInAndSingUpPage = () => {
    const navigate = useNavigate()
    return(
        <div className="sign-in-and-sign-up">
            <SignIn/>
            <SignUp/>
        </div>
    )
}

export default SignInAndSingUpPage;