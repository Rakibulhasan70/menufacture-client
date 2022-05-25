import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import UseOrder from '../../Hooks/UseOrder';
import auth from '../firebase.init';

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


    const [deleting, setDeleting] = useState(null)
    const [productss, setProducts] = UseOrder()
    const handleDeleteBtn = id => {
        const url = `http://localhost:5000/myorder/${id}`
        console.log(url);
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const remainingItem = productss.filter(product => product._id !== id)
                setProducts(remainingItem)
                setDeleting(remainingItem)
            })

    }

    return (
        <div>
            <h2>My appointmnets :{products.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Payment</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <tr key={product._id}
                            >
                                <th>{index + 1}</th>
                                <td>{product.productName}</td>
                                <td>{product.price}$</td>
                                <td>

                                    {(product.price && !product.paid) && <Link to={`/dashboard/payment/${product._id}`}><button className='btn btn-sm btn-success'>pay</button></Link>}
                                    {(product.price && product.paid) && <div>
                                        <p><span className='text-success font-semibold'>Paid</span></p>
                                        <p>Transaction id: <span className='text-success font-semibold'>{product.transactionId}</span></p>

                                    </div>}
                                </td>
                                <div class="card-actions justify-center mt-3">

                                    {product.transactionId ?
                                        <label for="my-modal-6" disabled class="btn modal-button bg-red-500 border-0">Delete</label>
                                        :
                                        <label for="my-modal-6" class="btn modal-button bg-red-500 border-0">Delete</label>
                                    }


                                    <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                                    <div class="modal modal-bottom sm:modal-middle">
                                        <div class="modal-box">
                                            <h3 class="font-bold text-lg">Are You Sure You want to Delete????</h3>

                                            <div class="modal-action">
                                                <label for="my-modal-6" class="btn">Cancel</label>
                                                <label for="my-modal-6" onClick={() => handleDeleteBtn(product._id)} class="btn bg-red-500 border-0">Delete</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;