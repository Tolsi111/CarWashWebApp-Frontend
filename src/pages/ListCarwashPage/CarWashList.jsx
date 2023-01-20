import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Card, Button} from 'react-bootstrap';
import BookingForm from '../BookingFormPage/BookingForm';
import AppointmentForm from '../BookingFormPage/BookingForm';
import {LineWave} from 'react-loader-spinner';
import './CarWashList.css'
import { useContext } from 'react';
import AuthContext from '../../context/auth-context';
import CardHeader from 'react-bootstrap/esm/CardHeader';

function CarWashList() {
    const [carWashes, setCarWashes] = useState([]);
    const [showBookingForm, setShowBookingForm] = useState(false);
    const [selectedCarWash, setSelectedCarWash] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const authCtx = useContext(AuthContext);

    useEffect(() => {
        setIsLoading(true);
        axios.get('http://localhost:8080/carwashes')
            .then(res => {

                const loadedCarwashes = [];

                for(const key in res.data.carwashes) {
                    // console.log(res.data.carwashes[key])sal
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
                    <Card.Header>{carWash.name}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                        <p>
                            {carWash.address}
                        </p>
                        <footer className="blockquote-footer">
                        {authCtx.isLoggedIn && <Button onClick={() => handleBookClick(carWash)}>Book</Button>}
                        {showBookingForm && selectedCarWash === carWash && (
                            <BookingForm
                                carWash={carWash}
                                handleCancelClick={handleCancelClick}
                            />
                        )}
                        </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}

export default CarWashList;
