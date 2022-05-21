import React from 'react';

const Part = (props) => {
    const { name, img, description, minimunOrder, availableOrder, price } = props.part
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <img src={img} alt="" />
                    <h2 class="card-title">Name: {name}</h2>
                    <p>Description: {description}</p>
                    <p>Minimum-Quantity: ${minimunOrder}</p>
                    <p>Avaliable-Quantity: ${availableOrder}</p>
                    <p>Per Price: ${price}</p>
                    <div class="card-actions justify-center mt-3">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Part;