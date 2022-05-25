// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import UseOrder from '../../Hooks/UseOrder';

// const OrderDetails = (props, setModal) => {
//     const { _id, address, name, phone, productName, img, description, order, availableOrder, price } = props.product

//     const navigate = useNavigate()
//     const handlePay = () => {
//         navigate(`/dashboard/payment/${_id}`)
//     }

//     const [deleting, setDeleting] = useState(null)
//     const [products, setProducts] = UseOrder()
//     const handleDeleteBtn = id => {
//         const url = `http://localhost:5000/myorder/${id}`
//         console.log(url);
//         fetch(url, {
//             method: "DELETE"
//         })
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data)
//                 const remainingItem = products.filter(product => product._id !== id)
//                 setProducts(remainingItem)
//                 setDeleting(remainingItem)
//             })




//     }



//     return (
//         <div>
//             <div class="card w-96 bg-base-100 shadow-xl mt-5">
//                 <div class="card-body">
//                     <img src={img} alt="" />
//                     <h2 class="card-title">Name: {name}</h2>
//                     <h2>Description: {description}</h2>
//                     <p>Order: {order}</p>
//                     <h2>Available Order: {availableOrder}</h2>
//                     <h2>Price: {price}</h2>
//                     <h2>Product Name: {productName || 'Not Found'}</h2>
//                     <h2>Address: {address || 'Not Found'}</h2>
//                     <h2>Phone: {phone || 'Not Found'}</h2>
//                     <div className='flex justify-between'>
//                         <button onClick={handlePay} className='btn btn-accent w-20'>Pay</button>
//                         <label for="my-modal-6" class="btn modal-button bg-red-500 border-0">Delete</label>
//                         <input type="checkbox" id="my-modal-6" class="modal-toggle" />
//                         <div class="modal modal-bottom sm:modal-middle">
//                             <div class="modal-box">
//                                 <h3 class="font-bold text-lg">Are You Sure You want to Delete????</h3>

//                                 <div class="modal-action">
//                                     <label for="my-modal-6" class="btn">Cancel</label>
//                                     <label for="my-modal-6" onClick={() => handleDeleteBtn(_id)} class="btn bg-red-500 border-0">Delete</label>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default OrderDetails;