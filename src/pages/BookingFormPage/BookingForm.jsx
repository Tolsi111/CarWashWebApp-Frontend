import React, { useState, useEffect } from 'react';
import { Form, FormGroup, FormLabel, Button, FormControl} from 'react-bootstrap';
//import { KeyboardDatePicker } from '@material-ui/pickers';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({
//   root: {
//     width: 200,
//   },
// });

function BookingForm({ carWash, handleCancelClick, handleBookingFormSubmit }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  // const classes = useStyles();

  return (
    <Form onSubmit={handleBookingFormSubmit}>
      <FormGroup>
        <FormLabel for="name">Name</FormLabel>
        <FormControl
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </FormGroup>
      <FormGroup>
        <FormLabel for="phone">Phone</FormLabel>
        <FormControl
          type="text"
          name="phone"
          id="phone"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          required
        />
      </FormGroup>
      {/* <FormGroup>
        <FormLabel for="date">Date</FormLabel>
        <KeyboardDatePicker
          className={classes.root}
          value={date}
          onChange={date => setDate(date)}
          required
        />
      </FormGroup> */}
      <FormGroup>
        <FormLabel for="time">Time</FormLabel>
        <FormControl
          type="text"
          name="time"
          id="time"
          value={time}
          onChange={e => setTime(e.target.value)}
          required
        />
      </FormGroup>
      <Button type="submit" disabled={!name || !phone || !date || !time}>Book</Button>
      <Button onClick={handleCancelClick}>Cancel</Button>
    </Form>
  );
}

export default BookingForm;
