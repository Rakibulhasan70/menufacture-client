import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://menufacture-server.onrender.com/review')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReviews(data)
            })
    }, [])
    return (
        <div>
            <h2 className='text-3xl font-semibold text-center my-5'>Customer Response</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    >

                    </Review>)
                }
            </div>
            <p className='text-center my-5 text-bold text-xl link link-hover text-blue-500'><Link to='/dashboard/addreview'> Go to Add Review</Link></p>
        </div>
    );
};

export default Reviews;