import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import CheckoutForm from './CheckoutForm';
import { useQuery } from 'react-query';


const stripePromise = loadStripe('pk_test_51L36HPDSwcecuX813VvXAEHIEcEaDJFFSepUyBw0E6BoJXV7awyaIBzaddJCZL3bLGEnkuiKJkOCdrZPp5xdgAzJ00rSmMzm0q');

const Payment = () => {
    const { id } = useParams();
    const url = `https://ancient-bayou-13762.herokuapp.com/orders/${id}`;

    const { data: appointment, isLoading, refetch } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="card w-50 max-w-md my-12 bg-base-100 shadow-xl">
                <div className="card-body">
                    <p className='text-success font-bold'>Hello, {appointment.customerName}</p>
                    <h2 className="card-title">Please Pay for {appointment.pName}</h2>
                    <p>Your Order Quantity is: {appointment.quantity}</p>
                    <p>Please Pay: <span className='text-error'>${appointment.price}</span> For Per Quantity</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;