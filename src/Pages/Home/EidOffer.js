import React from 'react';
import './EidOffer.css'
import review1 from '../../image/review/review1.png'
import review2 from '../../image/review/review2.png'
import review3 from '../../image/review/review3.png'
const EidOffer = () => {
    return (
        <div className='px-12'>
            <h2 className='text-4xl my-5 text-center font-semibold '>Our Services</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                <div className=' review text-center review3'>
                    <img className='mt-5 mx-auto' width='70' src={review1} alt="" />
                    <p className='mt-1 mb-0'>Delivery</p>
                    <h5 className='mb-4'>In 24 hours</h5>
                </div>
                <div className=' review text-center review2'>
                    <img className='mt-5 mx-auto' width='70' style={{ borderRadius: '15px' }} src={review3} alt="" />
                    <p className='mt-3 mb-0'>Best Product</p>
                    <h5 className='mb-4 '>9.2</h5>
                </div>
                <div className='review text-center review1'>
                    <img className='mt-5 mx-auto' width='100' src={review2} alt="" />
                    <p className='mt-1 mb-0'>Shipment</p>
                    <h5 >Free</h5>
                </div>
            </div>
        </div>
    );
};

export default EidOffer;