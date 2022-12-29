import React from "react";
import { useContext } from "react";
import { useRef } from "react";
import {Button} from "react-bootstrap"
import AuthContext from "../../context/auth-context";

function LoginForm() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const authCtx = useContext(AuthContext);

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
        <form onSubmit={submitLogin}>
            <div>
                <label htmlFor={"email"}>Your Email</label>
                <input type={"email"} id={"email"} ref={emailRef}/>
            </div>
            <div>
                <label htmlFor={"password"}>Your Password</label>
                <input type={"password"} id={"password"} ref={passwordRef}/>
            </div>
            <Button type={"submit"}>Login</Button>
        </form>
        
    )
}

export default LoginForm;