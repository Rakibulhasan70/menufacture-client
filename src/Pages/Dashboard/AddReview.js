import React from 'react';
import { useForm } from 'react-hook-form';

const AddReview = () => {
    const { register, handleSubmit } = useForm();
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
            })

    }
    return (
        <div>
            <h2 className='text-3xl font-semibold text-center my-5'>Review</h2>
            <form onSubmit={handleSubmit(onSubmit)} style={{ textAlign: 'center' }}>
                <input className='mb-3 border-2 w-1/3 rounded-md' placeholder='you name' {...register("name", { required: true })} />
                <br />
                <textarea className='mb-3 border-2 w-1/3 rounded-md' placeholder='you description  ' {...register("description")} />
                <br />
                <input type="number"
                    placeholder="Ratings"
                    className="input input-bordered w-full max-w-xs"
                    {...register("number")}
                />
                <br />
                {/* <input className='mb-2' placeholder='Photo URL' type="text" /> */}

                <input className='mb-3 border-2 w-1/3 rounded-md bg-primary py-2' type="submit" value='Add' />

            </form>
        </div>
    );
};

export default AddReview;