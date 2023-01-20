import React from "react";
import { useContext,useState } from "react";
import { useRef } from "react";
import {Button, Option} from "react-bootstrap"
import AuthContext from "../../context/auth-context";
import {useNavigate} from 'react-router-dom'
function RegisterForm(){

    const emailRef = useRef();
    const passwordRef = useRef();
    const firstnameRef = useRef();
    const lastnameRef = useRef();
    const telephoneRef = useRef();
    const authCtx = useContext(AuthContext);
    const navigate = useNavigate();
    const [roless,setRoless]=useState([]);
    const options = [
        {
            id: 1,
            label:"User",
            value:"ROLE_USER",
        },
        {
            label:"CarWash Owner",
            value:"ROLE_CARWASH_OWNER",
        },
    ];
    const handleChange = (e) => {
        if(e.target.checked){
            setisChecked(e.target.value);
            if(!roless.includes(e.target.value)){
                setRoless([...roless,e.target.value]);
            }
        }
    };
    const [isChecked,setisChecked] = useState(false);
    const navigateToLogin= () =>{
        navigate('/login');
    };
    async function submitRegister(event) {
        event.preventDefault();

        console.log(firstnameRef.current.value);
        console.log(lastnameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
        console.log(roless);
        console.log(telephoneRef.current.value);

        const registerObj = {
            firstName : firstnameRef.current.value,
            lastName : lastnameRef.current.value,
            email : emailRef.current.value,
            password : passwordRef.current.value,
            roles : roless,
            telephoneNr : telephoneRef.current.value
        }
        const response = await fetch ('http://localhost:8080/users',{
            method : 'POST', 
            body : JSON.stringify(registerObj),
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        const data = await response.json();
        console.log(data);
//                  if(data.status =="success")
//  {
//      authCtx.onRegister(emailRef.current.value,data.role);
//  }
}
return(
    <div className="auth-form-container">
            <h1>Sign Up</h1>
            <div className="register-text">
                Already have an account?
                <button className="register-btn" onClick = {navigateToLogin}>Login</button>
            </div>
        <form className="register-form" onSubmit={submitRegister}>
                <input type={"text"} id={"firstname"}placeholder ="FirstName" ref={firstnameRef}/>
                <input type={"text"} id={"lastname"}placeholder ="LastName" ref={lastnameRef}/>
                <input type={"email"} id={"email"} placeholder ="Email"  ref={emailRef}/>
                <input type={"password"} id={"password"}placeholder ="Password" autoComplete="off" ref={passwordRef}/>
                <input type={"text"} id={"telephone"}placeholder ="Telephone" ref={telephoneRef}/>

                <ul className="flex items-center gap-1">
                    {options.map((role,index)=>(
                        <li key ={index}>
                            <input
                                className="checkboxes"
                                type="checkbox"
                                id={role.value}
                                name="roles"
                                value={role.value}
                                checked={role.value==isChecked}
                                onChange = {handleChange}
                        />
                        <label htmlFor = {role.value} className="text-sm ml-1">
                            {role.label}
                        </label>
                        </li>
                    ))}
                </ul>

                {/* <select className="select-role" placeholder="Select a Role:">
                    <option className="option"disabled>Choose a role</option>
                    <option className="option" ref={roleRef}value={["ROLE_CARWASH_OWNER"]}>CarWash Owner</option>
                    <option className="option" ref = {roleRef}value={["ROLE_USER"]} >User</option>
                </select>
                 */}
                <button className="button-submit" type={"submit"}>Sign Up</button>
        </form>
        </div>
)
};
export default RegisterForm;