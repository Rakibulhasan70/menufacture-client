import React from 'react';
import banner1 from '../../image/banner/ban1.png'
import banner2 from '../../image/banner/ban2.png'
import banner3 from '../../image/banner/ban3.png'

const Banner = () => {
    return (
        <div>
            <h2 className='text-center text-4xl font-semibold text-blue-600 mb-5'>BMW Top Speed</h2>
            <div class="carousel w-full mt-5">
                <div id="slide1" class="carousel-item relative w-full">
                    <img src={banner3} class="w-full" /> /
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" class="btn btn-circle">❮</a>
                        <a href="#slide2" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" class="carousel-item relative w-full">
                    <img src={banner2} class="w-full" /> /
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" class="btn btn-circle">❮</a>
                        <a href="#slide3" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" class="carousel-item relative w-full">
                    <img src={banner1} class="w-full" /> /
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" class="btn btn-circle">❮</a>
                        <a href="#slide4" class="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;