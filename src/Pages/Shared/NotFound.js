import React from 'react';
import error from '../../image/error.jpg'

const NotFound = () => {
    return (
        <div className='px-12 flex gap-5 grid grid-cols-1 lg:grid-cols-2  '>
            <div><img src={error} alt="" /></div>
            <div>
                <p className='text-4xl lg:mt-5'>OPPS!!! No page found</p>
            </div>
        </div>
    );
};

export default NotFound;