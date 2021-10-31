import React from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import axios from 'axios';
import useAuth from '../../Hooks/useAuth/useAuth';

const BookingDetails = () => {
    const { register, handleSubmit, reset } = useForm();
    const { bookingId } = useParams();
    const { services, allContext } = useAuth();
    const { user } = allContext;

    const bookingData = services.find(service => service._id === bookingId);

    const onSubmit = data => {
        data.package = bookingData;

        axios.post('https://wicked-nightmare-49756.herokuapp.com/bookings', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Booking Processed Successfully');
                    reset();
                }
            })
    };
    return (
        <div className="">
            <div className="align-items-center mx-auto">
                <img className="w-100 h-50" src={bookingData?.img} alt="" />
                <div className="container row my-5 mx-auto">
                    <div className="col-lg-6">
                        <h1 className=" fw-bold text-color">{bookingData?.name}</h1>
                        <p>{bookingData?.description}</p>
                    </div>
                    <div className="col-lg-6 text-center">
                        <h1>Book This Tour</h1>
                        <p>Arrange your trip in advance - book this tour now!</p>
                        <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>

                            <input defaultValue={user.displayName} {...register("name", { required: true })} />

                            <input defaultValue={user.email} {...register("email", { required: true })} />
                            <input placeholder="Address" defaultValue="" {...register("address", { required: true })} />
                            <input placeholder="City" defaultValue="" {...register("city", { required: true })} />
                            <input placeholder="Phone number" type="number" defaultValue="" {...register("phone", { required: true })} />
                            <button className="btn btn-primary" type="submit">Place Booking</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BookingDetails;