import React from 'react';
import UsePart from '../../../Hooks/UsePart';

const ManageOrderDetails = (props) => {
    const { _id, name, img, description, order, availableOrder, price } = props.part

    const [products, setProducts] = UsePart()
    const handleDeleteBtn = id => {
        const procced = window.confirm('Are you sure for delete ??')
        if (procced) {
            const url = `http://localhost:5000/part/${id}`
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
                    <p>Description: {description}</p>
                    <p>Order-Quantity: {order}</p>
                    <p>Avaliable-Quantity: {availableOrder}</p>
                    <p>Per Price: ${price}</p>
                    <div class="card-actions justify-center mt-3">
                        <button onClick={() => handleDeleteBtn(_id)} class="btn btn-accent">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageOrderDetails;