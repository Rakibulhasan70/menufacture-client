import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddProduct = () => {

    const handleSubmit = async (e) => {
        e.preventDefault()
        const img = e.target.img.value;
        const name = e.target.name.value
        const description = e.target.description.value
        const orderquantity = e.target.orderquantity.value
        const avaialblequantity = e.target.avaialblequantity.value
        const price = e.target.price.value


        const product = {
            img,
            name,
            description,
            orderquantity,
            avaialblequantity,
            price
        }
        console.log(product);


        const url = 'http://localhost:5000/part';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast('New Product added done')
                // navigate('/home')
            })
    }
    return (
        <div className='px-12 '>
            <h2 className='text-2xl my-4'>Please Add A Product</h2>
            <form onSubmit={handleSubmit} className='mt-4 '>
                <div>
                    <input className='input input-bordered w-full max-w-xs  mt-3' type="photo URL" name="img" id="" placeholder='Image' />
                    <br />
                    <input className='input input-bordered w-full max-w-xs  mt-3' type="text" name="name" id="" placeholder='Name' />
                    <br />
                    <input className='input input-bordered w-full max-w-xs  mt-3' type="text" name="description" id="" placeholder='Description' />
                    <br />
                    <input type="number" name="orderquantity" placeholder='Order Quantity ' className='input input-bordered w-full max-w-xs  mt-3' id="" />
                    <br />
                    <input type="number" name="avaialblequantity" placeholder='Available Quantity' className='input input-bordered w-full max-w-xs  mt-3' id="" />
                    <br />
                    <input type="number" name="price" placeholder='Price' className=' input input-bordered w-full max-w-xs  mt-3' id="" />
                    <br />
                    <input type="submit" value="Purches" className='input input-bordered w-full max-w-xs  mt-3 btn btn-success' />
                </div>

            </form>
        </div>
    );
};

export default AddProduct;