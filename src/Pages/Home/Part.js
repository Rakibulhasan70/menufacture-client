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
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <img style={{ height: '190px', borderRadius: '15px' }} src={img} alt="" />
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Description: {description}</p>
                    <p>Order-Quantity: {order}</p>
                    <p>Avaliable-Quantity: {availableOrder}</p>
                    <p>Per Price: ${price}</p>
                    <div className="card-actions justify-center mt-3">
                        <button onClick={() => handleNavigate(_id)} className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Part;