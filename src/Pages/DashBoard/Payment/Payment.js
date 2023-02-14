import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import { useLoaderData, useNavigation } from 'react-router-dom';
import CheckOut from './CheckOut';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_pk);

const Payment = () => {
    const bookings = useLoaderData()
    const naviagation = useNavigation()
    const { TreatmentName, price, appointmentDate, slot } = bookings;
    if (naviagation.state === "loading") {
        return <InfinitySpin style={{ margin: '0 , auto' }}></InfinitySpin>
    }
    return (
        <div>
            <h1 className='text-3xl my-2'>Payment</h1>
            <p className='text-[18px]'>Please Pay ${price} for your appointment {TreatmentName} in {appointmentDate} at {slot}</p>
            <div className='w-96 my-12 card bg-base-100 '>
                <Elements stripe={stripePromise}>
                    <CheckOut
                        booking={bookings}
                    >

                    </CheckOut>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;