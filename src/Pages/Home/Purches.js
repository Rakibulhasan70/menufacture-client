import React from 'react';
import { useParams } from 'react-router-dom';
import UseCardDetails from '../../Hooks/UseCardDetails';

const Purches = () => {
    const { carId } = useParams()
    let [car] = UseCardDetails(carId)


    const handleIncrease = e => {
        e.preventDefault()
        const number = e.target.number.value;
        let { order, img, description, availableOrder, name, price } = car

        if (number > 0 && number < order && number < availableOrder) {
            order = parseInt(order) + parseInt(number)
            console.log(order);
            car = { order, img, description, availableOrder, name, price }
            console.log(car);

        }
        else {
            alert('wrong')
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

        if (number > 0 && number < order && number < availableOrder) {
            order = parseInt(order) - parseInt(number)
            console.log(order);
            car = { order, img, description, availableOrder, name, price }
            console.log(car);

        }
        else {
            alert('wrong')
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


    return (
        <div className='px-12'>
            <div class=" bg-base-100 gird grid-cols-1 lg:grid-cols-4 flex justify-center items-center" >
                <div className=''>
                    <img className='w-60' src={car.img} alt="" />
                    <h2 class="card-title">Name: {car.name}</h2>
                    <p>Description: {car.description}</p>
                    <h2>Order Quantity : {car.order}</h2>
                    <h2>Available Quantity: {car.availableOrder}</h2>
                    <h2>Price: ${car.price}</h2>
                    <form onSubmit={handleIncrease}>
                        {/* <input className='border-2 rounded-md' type="text" name="name" id="" placeholder='Name' />
                        <br />
                        <input className='border-2 mt-2 rounded-md' type="email" name="email" id="" placeholder='Email' />
                        <br />
                        <input className='border-2 mt-2 rounded-md' type="text" name="address" id="" placeholder='Address'
                        />
                        <br /> */}
                        <input className='border-2 mt-2 rounded-md ' type="number" name="number" id="" placeholder='Increase' />

                        <input type="submit" value="Increase" className='bg-indigo-500 border-2 mt-2 px-3 py-2 rounded text-white' />
                    </form>

                    <form onSubmit={handleDecrease}>
                        <input className='border-2 mt-2 rounded-md' type="number" name="number" id="" placeholder='Decrease' />
                        <input type="submit" value="Decress" className='bg-indigo-500 border-2 mt-2 px-3 py-2 rounded text-white ' />
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Purches;