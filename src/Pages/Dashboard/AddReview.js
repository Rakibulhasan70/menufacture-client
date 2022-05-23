import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddReview = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate()
    const onSubmit = data => {

        const url = 'http://localhost:5000/review';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast('Review added done')
                navigate('/home')
            })

    }
    return (
        <div>
            <h2 className='text-3xl font-semibold text-center my-5'>Review</h2>
            <form onSubmit={handleSubmit(onSubmit)} style={{ textAlign: 'center' }}>
                <input className='mb-3 border-2 w-1/3 py-2 px-2 rounded-md' placeholder='you name' {...register("name", { required: true })} />
                <br />
                <textarea className='mb-3 border-2 w-1/3 px-2 py-2 rounded-md' placeholder='you description  ' {...register("description")} />
                <br />
                <input
                    placeholder="Ratings"
                    className="mb-3 border-2 w-1/3 rounded-md px-2 py-2"
                    {...register("Ratings")}
                />
                <br />
                <input className='mb-3 border-2 w-1/3 rounded-md px-2 py-2' placeholder='img' {...register("img")} />
                <br />
                <input className='mb-3 border-2 w-1/3 rounded-md bg-primary py-2' type="submit" value='Add' />

            </form>
        </div>
    );
};

export default AddReview;