import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ChecjoutForm = (props) => {
    const stripe = useStripe()
    const elements = useElements()
    const [cardError, setCardError] = useState('')
    const [success, setSuccess] = useState('')
    const [proccessing, setProccessing] = useState(false)
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('')
    const navigate = useNavigate()

    const { price, name, email, _id } = props.payment
    console.log(price);


    useEffect(() => {
        if (price) {
            fetch('https://cryptic-retreat-89844.herokuapp.com/create-payment-intent', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({ price })
            })
                .then(res => res.json())
                .then(data => {
                    if (data?.clientSecret) {
                        setClientSecret(data.clientSecret)
                    }
                })
        }

    }, [price])

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        setCardError(error?.message || '')
        setSuccess('')

        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email
                    }
                }
            }
        );
        if (intentError) {
            setCardError(intentError?.message)
            success('')
            setProccessing(false)
        }
        else {
            setCardError('');
            console.log(paymentIntent);
            setTransactionId(paymentIntent.id)
            setSuccess('Your Payment is complete')
            setProccessing(true)
            toast('Your Payment is complete')

            // update kora
            // store payment on database
            const payment = {
                appointment: _id,
                transactionId: paymentIntent.id
            }
            fetch(`https://cryptic-retreat-89844.herokuapp.com/myorder/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    setProccessing(false)
                    console.log(data)
                })



        }


    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />

                {!transactionId &&
                    <button className='btn btn-success btn-sm mt-4' type="submit" disabled={!stripe}>
                        Pay
                    </button >}
                {transactionId &&
                    <button className='btn btn-success btn-sm mt-4 text-white' type="submit" disabled={!stripe || !clientSecret}>
                        Paied
                    </button >}
            </form>
            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
            {
                success && <p className='text-green-500'><div>
                    <p>{success}</p>
                    <p>Your Transication Id : <span className='text-orange-500 font bold'>{transactionId}</span></p>
                </div></p>
            }
        </>
    );
};

export default ChecjoutForm;