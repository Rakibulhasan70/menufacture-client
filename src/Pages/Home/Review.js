import React from 'react';

const Review = (props) => {
    const { img, name, description, ratings } = props.review
    return (
        <div>
            <div class="card  bg-base-100 shadow-xl ">
                <div class="card-body">
                    {/* <div class="avatar">
                        <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} />
                        </div>
                    </div> */}
                    <h2 class="card-title">Name: {name}</h2>
                    <p>Description: {description}</p>
                    <p>Ratings: {ratings} star</p>
                </div>
            </div>
        </div>
    );
};

export default Review;