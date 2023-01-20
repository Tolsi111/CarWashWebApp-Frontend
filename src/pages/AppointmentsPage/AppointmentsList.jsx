import React, {useState, useEffect} from 'react';
import {LineWave} from 'react-loader-spinner';
import { useContext } from "react";
import AuthContext from '../../context/auth-context';
import axios from 'axios';
import { Card, Container, ListGroup } from 'react-bootstrap';
import './AppointmentsPage.css';

function AppointmentsList() {
    const [appointments, setAppointments] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const authCtx = useContext(AuthContext);

    useEffect(() => {
        setIsLoading(true);
        console.log("loged in user id: " + authCtx.id)

        axios.get('http://localhost:8080/appointments/customer/' + authCtx.id)
        .then(res => {
            console.log(res);
            const loadedAppointments = [];

            for(const key in res.data)
            {
                loadedAppointments.push({
                    id: res.data[key].id,
                    customer: res.data[key].customerEmail,
                    carwash: res.data[key].carwashName,
                    service: res.data[key].serviceDescription,
                    start: res.data[key].startTime,
                    end: res.data[key].endTime
                })
            }
            setAppointments(loadedAppointments);
            setIsLoading(false);
        })
    }, [])

    return (
        <div className='scrollable-content'>
        {/* {isLoading && <LineWave
            className='spinner'
            height="200"
            width="200"
            color="#BAC7CA"
            ariaLabel="line-wave"
            wrapperClass="spinner"
            visible={true}
        />} */}
        {appointments.length === 0 && <h1>You have no appointments</h1>}
        {!isLoading && appointments.map(appointment => (
            <Card key={appointment.id} style={{width: '18rem'}} className='item'>
                <Card.Header>{appointment.carwash}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                    <p>
                        You have a booked {appointment.service} at {appointment.carwash} from {appointment.start} to {appointment.end}.
                    </p>
                    <footer className="blockquote-footer">
                    </footer>
                    </blockquote>
                </Card.Body>
            </Card>
        ))}
    </div>
    )
}

export default AppointmentsList;