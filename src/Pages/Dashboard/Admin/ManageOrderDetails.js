import React, { useState } from 'react';
import { toast } from 'react-toastify';
import UsePart from '../../../Hooks/UsePart';

const ManageOrderDetails = (props) => {
    const { _id, name, img, description, order, availableOrder, price } = props.part

    const [deleting, setDeleting] = useState(null)

    const [products, setProducts] = UsePart()
    const handleDeleteBtn = id => {
        const url = `https://cryptic-retreat-89844.herokuapp.com/part/${id}`
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

            <div class="card w-80 bg-base-100 shadow-xl my-5 ">
                <div class="card-body">
                    <img style={{ height: '190px' }} src={img} alt="" />
                    <h2 class="card-title">Name: {name}</h2>
                    <p>Description: {description}</p>
                    <p>Order-Quantity: {order}</p>
                    <p>Avaliable-Quantity: {availableOrder}</p>
                    <p>Per Price: ${price}</p>
                    <div class="card-actions justify-center mt-3">
                        <label for="my-modal-6" class="btn modal-button bg-red-500 border-0">Delete</label>
                        <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                        <div class="modal modal-bottom sm:modal-middle">
                            <div class="modal-box">
                                <h3 class="font-bold text-lg">Are You Sure You want to Delete????</h3>

                                <div class="modal-action">
                                    <label for="my-modal-6" class="btn">Cancel</label>
                                    <label for="my-modal-6" onClick={() => handleDeleteBtn(_id)} class="btn bg-red-500 border-0">Delete</label>
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