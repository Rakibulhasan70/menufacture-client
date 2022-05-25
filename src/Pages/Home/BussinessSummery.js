import React from 'react';
import { BsTools } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";
import { FcFeedback } from "react-icons/fc";

const BussinessSummery = () => {
    return (
        <div className='mt-5'>
            <h2 className='text-center text-3xl font-semibold'>Why You Wants?</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3  my-5 gap-7'>
                <div>
                    <div class="card w-96 bg-base-100 ">
                        <div class="card-body">
                            <p className='text-5xl text-blue-500'><BsFillPeopleFill /></p>
                            <p className='text-3xl text-purple-500'>1200+</p>
                            <h2 class="text-4xl font-semibold text-cyan-500">Served</h2>

                        </div>
                    </div>
                </div>
                <div>
                    <div class="card w-96 bg-base-100 ">
                        <div class="card-body">
                            <p className='text-5xl text-cyan-500'><FcFeedback /></p>
                            <p className='text-3xl text-purple-500'>500+</p>
                            <h2 class="text-4xl font-semibold text-cyan-500"> Reviews</h2>
                            <p></p>

                        </div>
                    </div>
                </div>
                <div>
                    <div class="card w-96 bg-base-100 ">
                        <div class="card-body">
                            <p className='text-5xl text-cyan-500'><BsTools /></p>
                            <p className='text-3xl text-purple-500'>150+</p>
                            <h2 className="text-4xl font-semibold text-cyan-500">Tools</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BussinessSummery;