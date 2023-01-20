import React, { useState, useEffect } from 'react';
import { Form, FormGroup, FormLabel, Button, FormControl} from 'react-bootstrap';
import CustomDatePicker from "./CustomDatePicker";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

function BookingForm({ carWash, handleCancelClick}) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(null);
    const [startTime, setStartTime] = useState();
    const [endTime, setEndTime] = useState();
    const [service, setService] = useState(carWash.services[0].description);

    async function handleBookingFormSubmit (event, name, phone, date, time) {
        console.log("submiting...")
        event.preventDefault();
        const appointment = {
            customerEmail: "test@test.test",
            carwashName: carWash.name,
            serviceDescription: service,
            startTime: startTime,
            endTime: endTime
        }
        const response = await fetch('http://localhost:8080/appointments', {
            method: 'POST',
            body: JSON.stringify(appointment),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        const data = await response.json();
    }

    return (
      <>
          <form onSubmit={handleBookingFormSubmit}>
              <input name={"startTime"} onChange={(e) => setStartTime(e.target.value)} value={startTime} placeholder={"start date & time"}/>
              <input name={"endTime"} onChange={(e) => setEndTime(e.target.value)} value={endTime} placeholder={"end date & time"}/>
              <select name={"service"} onChange={(e) => setService(e.target.value)}>
                  {carWash.services.map((service) => {
                      return <option value={service.description}>{service.description}</option>
                  })}
              </select>
              <Button type={"submit"}>Book</Button>
              <Button onClick={handleCancelClick}>Cancel</Button>
          </form>
      </>
  );
}

export default BookingForm;
