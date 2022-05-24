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
    const email = user?.email


    const handleIncrease = e => {
        e.preventDefault()
        const number = e.target.number.value;
        let { order, img, description, availableOrder, name, price } = car

        if (number) {
            order = parseInt(order) + parseInt(number)
            console.log(order);
            car = { order, img, description, availableOrder, name, price }
            console.log(car);

        }
        else {
            toast.error(`You have to purchase maximum ${car.availableOrder} products`)
        }

        const url = `http://localhost:5000/part/${carId}`
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

    const handleDecrease = e => {
        e.preventDefault()
        const number = e.target.number.value;
        let { order, img, description, availableOrder, name, price } = car

        if (number) {
            order = parseInt(order) - parseInt(number)
            console.log(order);
            car = { order, img, description, availableOrder, name, price }
            console.log(car);

        }
        else {
            toast.error(`You have to purchase at least ${car.order} products`)

        }

        const url = `http://localhost:5000/part/${carId}`
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

    // form section

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
        await axios.post('http://localhost:5000/addItem', newProduct)
            .then(function (res) {
                if (res?.data?.insertedId) {
                    toast('Purches is done')
                    navigate('/dashboard')
                }
            })
    }


    return (
        <div className='px-12'>
            <div class=" bg-base-100 gird grid-cols-1 lg:grid-cols-4 flex justify-center items-center" >
                <div >
                    <form onSubmit={handleSubmit} className='mt-4'>
                        <img className='w-60' src={car.img} alt="" />
                        <h2 class="card-title">Name: {car.name}</h2>
                        <p>Description: {car.description}</p>
                        <h2>Minuaum Quantity : {car.order}</h2>
                        <h2>Available Quantity: {car.availableOrder}</h2>
                        <h2>Price: ${car.price}</h2>

                        <input className='border-2 rounded-md px-2 py-2 mt-3' value={user?.displayName} disabled type="text" name="name" id="" placeholder='displayName' />
                        <br />
                        <input className='border-2 rounded-md mt-2 px-2 py-2' value={user.email} disabled type="email" name="email" id="" placeholder='Email' />
                        <br />
                        <input type="text" name="address" placeholder='Address ' className=' border-2 rounded-md mt-2 px-2 py-2' id="" />
                        <br />
                        <input type="number" name="phone" placeholder='Phone ' className=' border-2 rounded-md mt-2 px-2 py-2' id="" />
                        <br />
                        {
                            <input type="submit" value="Purches" className='border-2 rounded-md mt-2 w-3/4 px-2 py-2 btn btn-success text-white' />
                        }
                    </form>
                    <form onSubmit={handleIncrease}>
                        <input className='border-2 mt-5 rounded-md px-2 py-2' type="number" defaultValue={car.availableOrder} name="number" id="" placeholder='Order Increase' />

                        <input type="submit" value="Increase" className='bg-indigo-500 border-2 mt-2 px-2 py-2 rounded text-white' />
                    </form>

                    <form onSubmit={handleDecrease}>
                        <input className='border-2 mt-1 rounded-md px-2 py-2' type="number" defaultValue={car.order} name="number" id="" placeholder='Order Decrease' />
                        <input type="submit" value="Decress" className='bg-indigo-500 border-2 mt-2 px-2 py-2 rounded text-white ' />
                    </form>

                </div>
            </div>
        </div>

    );
};

export default Purches;