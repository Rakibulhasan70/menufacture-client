import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UseOrder from '../../Hooks/UseOrder';

const OrderDetails = (props) => {
    const { _id, address, name, phone, productName, img, description, order, availableOrder, price } = props.product


    const [products, setProducts] = UseOrder()
    const handleDeleteBtn = id => {
        const procced = window.confirm('Are you sure for delete ??')
        if (procced) {
            const url = `http://localhost:5000/myorder/${id}`
            console.log(url);
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remainingItem = products.filter(product => product._id !== id)
                    setProducts(remainingItem)
                })

        }
    }
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <img src={img} alt="" />
                    <h2 class="card-title">Name: {name}</h2>
                    <h2>Description: {description}</h2>
                    <p>Order: {order}</p>
                    <h2>Available Order: {availableOrder}</h2>
                    <h2>Price: {price}</h2>
                    <h2>Product Name: {productName || 'Not Found'}</h2>
                    <h2>Address: {address || 'Not Found'}</h2>
                    <h2>Phone: {phone || 'Not Found'}</h2>
                    <div className='flex justify-between'>
                        <button onClick={() => handleDeleteBtn(_id)} className='btn btn-accent w-20'>Delete</button>
                        <Link to={`/dashboard/payment/${_id}`}><button className='btn btn-primary w-20'>Pay</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;