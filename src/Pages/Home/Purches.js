import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import UseCardDetails from '../../Hooks/UseCardDetails';
import auth from '../firebase.init';

const Purches = () => {
    const { carId } = useParams()
    let [car] = UseCardDetails(carId)
    const [user] = useAuthState(auth)
    const email = user?.email;


    const handleIncrease = e => {
        e.preventDefault()
        const number = e.target.number.value;
        let { order, img, description, availableOrder, name, price } = car

        if ((number > order) && (number < availableOrder)) {
            availableOrder = parseInt(availableOrder) - parseInt(number)
            car = { order, img, description, availableOrder, name, price }

        }
        else {
            toast.error(`You have to purchase maximum ${car.availableOrder} products and at least ${car.order} order`)
        }

        const url = `https://cryptic-retreat-89844.herokuapp.com/part/${carId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(car),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const address = e.target.address.value;
        const name = e.target.name.value
        const phone = e.target.phone.value
        const productName = car.name
        const img = car.img
        const description = car.description;
        const order = car.order;
        const availableOrder = car.availableOrder;
        const price = car.price

        const product = {
            address,
            name,
            phone,
            productName,
            img,
            description,
            order,
            availableOrder,
            price
        }
        console.log(product);
        const newProduct = {
            ...product, email: email
        }
        await axios.post('https://cryptic-retreat-89844.herokuapp.com/addItem', newProduct)
            .then(function (res) {
                if (res?.data?.insertedId) {
                    toast('Purches is done')
                    navigate('/dashboard')
                }
            })
    }


    return (
        <div className='px-12'>
            <div className=" bg-base-100 gird grid-cols-1 lg:grid-cols-4 flex justify-center items-center" >
                <div >
                    <form onSubmit={handleSubmit} className='mt-4'>
                        <img className='w-60 rounded-xl' src={car.img} alt="" />
                        <h2 className="card-title">Name: {car.name}</h2>
                        <p>Description: {car.description}</p>
                        <h2>Minuaum Quantity : {car.order}</h2>
                        <h2>Available Quantity: {car.availableOrder}</h2>
                        <h2>Price: ${car.price}</h2>

                        <input className='border-2 rounded-md  w-full max-w-xs px-2 py-2 mt-3' value={user?.displayName} disabled type="text" name="name" id="" placeholder='displayName' />
                        <br />
                        <input className='border-2  w-full max-w-xs rounded-md mt-2 px-2 py-2' value={user.email} disabled type="email" name="email" id="" placeholder='Email' />
                        <br />
                        <input type="text" name="address" placeholder='Address ' className=' border-2  w-full max-w-xs rounded-md mt-2 px-2 py-2' id="" />
                        <br />
                        <input type="number" name="phone" placeholder='Phone ' className=' border-2  w-full max-w-xs rounded-md mt-2 px-2 py-2' id="" />
                        <br />
                        <h2>Minimum Quantity</h2>
                        <input className='border-2 mt-1 rounded-md px-2 py-2 w-full max-w-xs' type="number" disabled value={car.order} name="number" id="" placeholder='Order Decrease' />
                        <br />

                        {
                            <input type="submit" value="Purches" className='border-2 rounded-md  w-full max-w-xs mt-2 px-2 py-2 btn btn-success text-white' />}
                    </form>
                    <form onSubmit={handleIncrease}>
                        <input className='border-2 mt-5 rounded-md px-2 py-2  ' type="number" defaultValue={car.availableOrder} name="number" id="" placeholder='Order Increase' />

                        <input type="submit" value="Increase" className='bg-indigo-500 border-2 mt-2 px-2 py-2 rounded text-white' />
                    </form>

                </div>
            </div>
        </div>

    );
};

export default Purches;