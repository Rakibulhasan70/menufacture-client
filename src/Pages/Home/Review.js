import React from 'react';

const Review = (props) => {
    const { img, name, description, Ratings } = props.review
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl ">
                <div className="card-body">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} />
                        </div>
                    </div>
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Description: {description}</p>
                    <p>Ratings: {Ratings} star</p>
                </div>
            </div>
        </div>

    );
};

export default Review;