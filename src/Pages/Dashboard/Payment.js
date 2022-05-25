import { Elements } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router-dom';
import UsePayment from '../../Hooks/UsePayment';
import ChecjoutForm from './ChecjoutForm';

const stripePromise = loadStripe('pk_test_51L0UcsIFjt8xvGHkZh0UClsyUEwizGqQxOfATx5z1osYgwu3MBGOWKN7qVI4M29Vcd9i6ZJGIUwgtaKlpCC4y0hC00NtQIly3N')

const Payment = () => {
    const { id } = useParams()
    console.log(id);
    const [payment, setPayment] = useState([])
    console.log(payment);
    useEffect(() => {
        const url = `http://localhost:5000/myorder/order/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setPayment(data)
            })
    }, [payment])



    return (
        <div>
            <h2>ID: {id}</h2>
            <h2>name:{payment.name}</h2>
            <div class="card w-full max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold">Hello , {payment.name}</p>
                    <h2 class="card-title"><span className='text-primary'>Please Pay for</span> {payment.email}</h2>
                    <p className='text-xl'>And Please pay {payment.price} BDT</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <ChecjoutForm

                        >

                        </ChecjoutForm>
                    </Elements>
                </div>
            </div>
        </div>
    );
}

export default Payment;