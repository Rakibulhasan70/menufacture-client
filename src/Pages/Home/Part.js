import React from 'react';
import { useNavigate } from 'react-router-dom';

const Part = (props) => {
    const { _id, name, img, description, order, availableOrder, price } = props.part
    const navigate = useNavigate()
    const handleNavigate = id => {
        navigate(`/purchase/${id}`)
    }
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <img style={{ height: '190px', borderRadius: '15px' }} src={img} alt="" />
                    <h2 class="card-title">Name: {name}</h2>
                    <p>Description: {description}</p>
                    <p>Order-Quantity: {order}</p>
                    <p>Avaliable-Quantity: {availableOrder}</p>
                    <p>Per Price: ${price}</p>
                    <div class="card-actions justify-center mt-3">
                        <button onClick={() => handleNavigate(_id)} class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Part;