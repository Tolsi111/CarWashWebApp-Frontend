import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import BookingForm from '../BookingFormPage/BookingForm';
import AppointmentForm from '../BookingFormPage/BookingForm';

function CarWashList() {
  const [carWashes, setCarWashes] = useState([]);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedCarWash, setSelectedCarWash] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/carwashes')
      .then(res => {
        setCarWashes(res.data);
      })
  }, []);

  const handleBookClick = carWash => {
    setSelectedCarWash(carWash);
    setShowBookingForm(true);
  }

  const handleCancelClick = () => {
    setShowBookingForm(false);
  }

  const handleBookingFormSubmit = (name, phone, date, time) => {
    // Send a POST request to the server to book the car wash
    // You can use the name, phone, date, and time variables to send the booking information
    // Reset the form fields after the booking is successful
  }

  return (
    <div>
      {carWashes.map(carWash => (
        <Card key={carWash.id} style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{carWash.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{carWash.address}</Card.Subtitle>
            {/* <Card.Text></Card.Text> */}
            <Button onClick={() => handleBookClick(carWash)}>Book</Button>
            {/* Add more details about the car wash here */}
            {showBookingForm && selectedCarWash === carWash && (
              <BookingForm
                carWash={carWash}
                handleCancelClick={handleCancelClick}
                handleBookingFormSubmit={handleBookingFormSubmit}
              />
            )}
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default CarWashList;
