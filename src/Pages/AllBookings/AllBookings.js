import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import BookingItem from '../Item/BookingItem';
import './AllBookings.css'

const AllBookings = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch('https://wicked-nightmare-49756.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])
    return (
        <div>
            <div className="banner-booking banner-bs mb-5 text-center text-white">
                <h1>MANAGE ALL <span className="text-color fw-bold">BOOKINGS</span></h1>
                <h5>Only Admin Can Handel This</h5>
            </div>
            <div className="container">
                <div className="container my-5">
                    <Row xs={1} md={3} className="g-5 p-4">
                        {
                            bookings.map(booking => <BookingItem key={booking._id} booking={booking}></BookingItem>)
                        }
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default AllBookings;