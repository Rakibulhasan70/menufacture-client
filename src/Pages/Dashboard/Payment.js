import { Elements } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router-dom';
import ChecjoutForm from './ChecjoutForm';

const stripePromise = loadStripe('pk_test_51L0UcsIFjt8xvGHkZh0UClsyUEwizGqQxOfATx5z1osYgwu3MBGOWKN7qVI4M29Vcd9i6ZJGIUwgtaKlpCC4y0hC00NtQIly3N')

const Payment = () => {
    const { id } = useParams()
    const [payment, setPayment] = useState([])
    useEffect(() => {
        const url = `https://cryptic-retreat-89844.herokuapp.com/myorder/order/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                ;
                setPayment(data)
            })
    }, [payment])



    return (
        <div className='lg:w-1/2 mx-auto'>

            <div className="card w-full max-w-md bg-base-100 shadow-xl my-12 ">
                <div className="card-body">
                    <p className="text-success font-bold">Hello , {payment.name}</p>
                    <h2 className="card-title"><span className='text-primary'>Please Pay for</span> {payment.email}</h2>
                    <p className='text-xl'>And Please pay {payment.price} BDT</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <ChecjoutForm
                            payment={payment}
                        >

                        </ChecjoutForm>
                    </Elements>
                </div>
            </div>
        </div>
    );
}

export default Payment;