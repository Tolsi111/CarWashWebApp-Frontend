import React from 'react';
import { useContext } from 'react';
import { useRef } from 'react';
import { useState,useEffect } from 'react'
import AuthContext from '../../context/auth-context'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

function RegisterCarWashForm() {
    const nameRef = useRef();
    const addressRef = useRef();
    const ownerEmailRef = useRef();
    const [services, setServices] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [serviceopt,setServiceOption] = useState([]);
    const [checked, setChecked] = useState([]);
    const [check,isCheck] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        axios.get('http://localhost:8080/services')
            .then(res => {

                const loadedServices = [];

                for(const key in res.data.services) {
                    // console.log(res.data.carwashes[key])sal
                    loadedServices.push({
                        id: res.data.services[key].id   ,
                        price: res.data.services[key].price,
                        description: res.data.services[key].description,
                    })
                }

                setServiceOption(loadedServices);
                 console.log(services);
                setIsLoading(false)
            })
    }, []);

    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.check) {
          updatedList = [...checked, event.target.value];
        } else {
          updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
        console.log(checked);

      };
      var isChecked = (item) =>
      checked.includes(item) ? "checked-item" : "not-checked-item";
  


async function submitRegister(event) {
    event.preventDefault();

    console.log(nameRef.current.value);
    console.log(addressRef.current.value);
    console.log(ownerEmailRef.current.value);
    console.log(services);

    const registerObj = {
        name: nameRef.current.value,
        address: addressRef.current.value,
        ownerEmail: ownerEmailRef.current.value,
        serviceId: services
    }

    const response = await fetch('http://localhost:8080/carwashes', {
        method: 'POST',
        body: JSON.stringify(registerObj),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
    const data = await response.json();
    console.log(data);
}


return (
    <div className="auth-form-container">
        <h1>Register Carwash</h1>
        <form className="register-form" onSubmit={submitRegister}>
            <input type="text" id={"name"} placeholder="Name" ref={nameRef} />
            <input type="text" id={"address"} placeholder="Address" ref={addressRef} />
            <input type="email" id={"email"} placeholder="Email" ref={ownerEmailRef} />
            <ul className="flex items-center gap-1">
                {serviceopt.map((services, index) => (
                    <li key={index}>
                        <input
                            className="checkboxes"
                            type="checkbox"
                            id={services.id}
                            name="services"
                            value={services.id}
                            onChange={handleCheck}
                        />
                        <label htmlFor={services.value} className={isChecked(services)}>
                            {services.description}
                        </label>
                    </li>
                ))}
            </ul>
            <button className="button-submit" type={"submit"}>Register CarWash</button>
        </form>
    </div>
)
                }
export default RegisterCarWashForm;
