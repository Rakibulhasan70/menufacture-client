import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import OrderDetails from './OrderDetails';

const MyOrder = () => {
    const [user] = useAuthState(auth)
    const email = user?.email

    const [products, setProduct] = useState([])
    useEffect(() => {

        const run = async () => {
            await axios.get(`http://localhost:5000/myorder/${email}`)
                .then(function (res) {
                    setProduct(res.data)
                })

        }
        run()
    }, [email, products])
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 px-12'>
            {
                products.map(product => <OrderDetails
                    key={product._id}
                    product={product}
                >

                </OrderDetails>)
            }
        </div>
    );
};

export default MyOrder;