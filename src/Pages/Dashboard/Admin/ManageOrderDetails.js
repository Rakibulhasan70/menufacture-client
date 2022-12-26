import React, { useState } from 'react';
import { toast } from 'react-toastify';
import UsePart from '../../../Hooks/UsePart';

const ManageOrderDetails = (props) => {
    const { _id, name, img, description, order, availableOrder, price } = props.part

    const [products, setProducts] = UsePart()
    const [deleting, setDeleting] = useState(null)

    const handleDeleteBtn = id => {
        const url = `https://menufacture-server.onrender.com/part/${id}`
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

    return (
        <div>

            <div className="card w-80 bg-base-100 shadow-xl my-5 ">
                <div className="card-body">
                    <img style={{ height: '190px' }} src={img} alt="" />
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Description: {description}</p>
                    <p>Order-Quantity: {order}</p>
                    <p>Avaliable-Quantity: {availableOrder}</p>
                    <p>Per Price: ${price}</p>
                    <div className="card-actions justify-center mt-3">
                        <label for="my-modal-6" className="btn modal-button bg-red-500 border-0">Delete</label>
                        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                        <div className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">Are You Sure You want to Delete????</h3>

                                <div className="modal-action">
                                    <label for="my-modal-6" className="btn">Cancel</label>
                                    <label for="my-modal-6" onClick={() => handleDeleteBtn(_id)} className="btn bg-red-500 border-0">Delete</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageOrderDetails;