import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
const ManageOrders = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://menufacture-server.onrender.com/manageorder')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    // const { data: products, isLoading } = useQuery('products', () => fetch('https://menufacture-server.onrender.com/manageorder')
    //     .then(res => res.json()))

    // if (isLoading) {
    //     <Loading></Loading>
    // }


    // / আমার এই প্রজেক্টে react query টা কোনভাবেই ইউস করতে পারতেছি না । সাপোরট সেশনে গিয়েছিলাম কিন্তু সমাধান হয়নি ।
    //  তাই ঝংকার ভাইয়ার কথামতো এখানে আমার কোড টা লিখে দিলাম/

    const [deleting, setDeleting] = useState(null)


    const handleDeleteBtn = id => {
        const procced = window.confirm('Are you sure for delete ??')
        if (procced) {
            const url = `https://menufacture-server.onrender.com/manageorder/${id}`
            console.log(url);
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remainingItem = products.filter(product => product._id !== id)
                    setProducts(remainingItem)
                    setDeleting(remainingItem)
                })
        }

    }

    return (
        <div>
            <h2 className='text-2xl my-3'>All Orders: {products.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Payment</th>
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
                                    {(product.transactionId) ?
                                        <label for="my-modal-6" className="btn modal-button bg-sky-500 text-white border-0">Pending</label>
                                        :
                                        <>
                                            <label for="my-modal-6" className="btn modal-button bg-green-500 text-white border-0  ">pay</label>

                                            <button for="my-modal-6" onClick={() => handleDeleteBtn(product._id)} className="btn modal-button bg-red-500 mx-2 text-white border-0 ">delete</button>

                                        </>
                                    }
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;