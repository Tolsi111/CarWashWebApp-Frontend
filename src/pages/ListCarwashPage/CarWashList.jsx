import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Card, Button} from 'react-bootstrap';
import BookingForm from '../BookingFormPage/BookingForm';
import AppointmentForm from '../BookingFormPage/BookingForm';
import {LineWave} from 'react-loader-spinner';
import './CarWashList.css'

function CarWashList() {
    const [carWashes, setCarWashes] = useState([]);
    const [showBookingForm, setShowBookingForm] = useState(false);
    const [selectedCarWash, setSelectedCarWash] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get('http://localhost:8080/carwashes')
            .then(res => {

                const loadedCarwashes = [];

                for(const key in res.data.carwashes) {
                    // console.log(res.data.carwashes[key])
                    loadedCarwashes.push({
                        id: res.data.carwashes[key].id,
                        name: res.data.carwashes[key].name,
                        address: res.data.carwashes[key].address,
                        services: res.data.carwashes[key].services
                    })
                }

                setCarWashes(loadedCarwashes);
                // console.log(carWashes[1]);
                setIsLoading(false)
            })
    }, []);

    const handleBookClick = carWash => {
        setSelectedCarWash(carWash);
        setShowBookingForm(true);
    }

    const handleCancelClick = () => {
        setShowBookingForm(false);
    }

    // const handleBookingFormSubmit = (event, name, phone, date, time) => {
    //     event.preventDefault();
    //     console.log("name: " + name);
    //     console.log("phone: " + phone);
    //     console.log("date: " + date);
    //     console.log("time" + time);
    //     // Send a POST request to the server to book the car wash
    //     // You can use the name, phone, date, and time variables to send the booking information
    //     // Reset the form fields after the booking is successful
    //     ////
    //     //customerEmail//testuser@test.com
    //     //carwashName name
    //     //serviceDescription
    //     //startTime
    //     //endTime
    // }

    return (
        <div>
            {isLoading && <LineWave
                className='spinner'
                height="200"
                width="200"
                color="#BAC7CA"
                ariaLabel="line-wave"
                wrapperClass="spinner"
                visible={true}
            />}
            {!isLoading && carWashes.map(carWash => (
                <Card key={carWash.id} style={{width: '18rem'}}>
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
                            />
                        )}
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}

export default CarWashList;
