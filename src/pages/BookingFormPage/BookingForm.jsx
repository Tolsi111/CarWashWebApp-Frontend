import React, { useState, useEffect } from 'react';
import { Form, FormGroup, FormLabel, Button, FormControl} from 'react-bootstrap';
import CustomDatePicker from "./CustomDatePicker";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
//import { KeyboardDatePicker } from '@material-ui/pickers';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({
//   root: {
//     width: 200,
//   },
// });

function BookingForm({ carWash, handleCancelClick}) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(null);
  // const classes = useStyles();
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
        // console.log(success);
        // event.preventDefault();
        // console.log(carWash);
        // console.log("name: " + name);
        // console.log("phone: " + phone);
        // console.log("date: " + date);
        // console.log("time" + time);

        // console.log("start: " + startTime);
        // console.log("end: " + endTime);
        // console.log("service: " + service);

        // Send a POST request to the server to book the car wash
        // You can use the name, phone, date, and time variables to send the booking information
        // Reset the form fields after the booking is successful
        ////
        //customerEmail testuser@test.com
        //carwashName carWash.name
        //serviceDescription
        //startTime startTime
        //endTime endTime
    }

    return (
    // <Form onSubmit={handleBookingFormSubmit}>
    //   <FormGroup>
    //     <FormLabel for="name">Name</FormLabel>
    //     <FormControl
    //       type="text"
    //       name="name"
    //       id="name"
    //       value={name}
    //       onChange={e => setName(e.target.value)}
    //       required
    //     />
    //   </FormGroup>
    //   <FormGroup>
    //     <FormLabel for="phone">Phone</FormLabel>
    //     <FormControl
    //       type="text"
    //       name="phone"
    //       id="phone"
    //       value={phone}
    //       onChange={e => setPhone(e.target.value)}
    //       required
    //     />
    //   </FormGroup>
    //   <FormGroup>
    //     <FormLabel for="date">Date</FormLabel>
    //       <DatePicker selected={date} onChange={(date:Date) => setDate(date)} />
    //     {/*  <KeyboardDatePicker*/}
    //     {/*  className={classes.root}*/}
    //     {/*  value={date}*/}
    //     {/*  onChange={date => setDate(date)}*/}
    //     {/*  required*/}
    //     {/*/>*/}
    //   </FormGroup>
    //
    //   <FormGroup>
    //     <FormLabel for="time">Time</FormLabel>
    //     <FormControl
    //       type="text"
    //       name="time"
    //       id="time"
    //       value={time}
    //       onChange={e => setTime(e.target.value)}
    //       required
    //     />
    //   </FormGroup>
    //   <Button type="submit" disabled={!name || !phone || !date || !time}>Book</Button>
    //   <Button onClick={handleCancelClick}>Cancel</Button>
    // </Form>
      <>
          <form onSubmit={handleBookingFormSubmit}>
              <input name={"startTime"} onChange={(e) => setStartTime(e.target.value)} value={startTime} placeholder={"start date & time"}/>
              <input name={"endTime"} onChange={(e) => setEndTime(e.target.value)} value={endTime} placeholder={"end date & time"}/>
              <select name={"service"} onChange={(e) => setService(e.target.value)}>
                  {carWash.services.map((service) => {
                      return <option value={service.description}>{service.description}</option>
                      // console.log(service.description)
                  })}
                  {/*{console.log(carWash.services)}*/}
                  {/*<option value={"hello"}>Hello</option>*/}
                  {/*<option value={"hello2"}>Hello2</option>*/}
                  {/*<option value={"hello3"}>Hello3</option>*/}
              </select>
              <Button type={"submit"}>Book</Button>
              <Button onClick={handleCancelClick}>Cancel</Button>
          </form>
      </>
  );
}

export default BookingForm;
