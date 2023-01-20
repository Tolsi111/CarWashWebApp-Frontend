import React from "react";
import { useContext } from "react";
import { useRef } from "react";
import {Button} from "react-bootstrap"
import AuthContext from "../../context/auth-context";
import {useNavigate} from 'react-router-dom'

function LoginForm() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const authCtx = useContext(AuthContext);
    const navigate = useNavigate();
    const navigateToRegister = () =>{
        navigate('/register');
    };

    async function submitLogin(event) {
        event.preventDefault();

        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);

        const loginObj = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }

        const response = await fetch('http://localhost:8080/login', {
            method: 'POST',
            body: JSON.stringify(loginObj),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        const data = await response.json();

        if(data.status == "success") {
            authCtx.onLogin(emailRef.current.value,data.role);
        }
        // console.log(data)

    }

    return(
        <div className="auth-form-container">
            <h1>Log In</h1>
            <div className="register-text">
                New to this Site?
                <button className="register-btn" onClick = {navigateToRegister}>Sign Up</button>
            </div>
        <form className="login-form" onSubmit={submitLogin}>
            
                <label htmlFor={"email"}>Email*</label>
                <input type={"email"} id={"email"} ref={emailRef}/>
                <label htmlFor={"password"}>Password*</label>
                <input type={"password"} id={"password"} ref={passwordRef}/>
            
                <button className="button-submit" type={"submit"}>Login</button>
        </form>
        </div>
    )
}

export default LoginForm;