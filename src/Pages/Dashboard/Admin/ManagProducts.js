import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import ManageOrderDetails from './ManageOrderDetails';

const ManagProducts = () => {
    const [parts, setParts] = useState([])
    useEffect(() => {
        fetch('https://menufacture-server.onrender.com/part')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [parts, setParts])


    // const { data: parts, isLoading } = useQuery('parts', () => fetch('https://menufacture-server.onrender.com/part')
    //     .then(res => res.json()))

    // if (isLoading) {
    //     return <Loading></Loading>
    // }

    return (
        <div>
            <h2 className='text-2xl text-center text-blue-500'>Manage All Product</h2>
            <div>
                <h2>{parts.name}</h2>
                <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-5 px-6'>
                    {
                        parts.map(part => <ManageOrderDetails
                            key={part._id}
                            part={part}
                        ></ManageOrderDetails>)
                    }
                </div>
            </div>
        </div>

    );
};

export default ManagProducts;