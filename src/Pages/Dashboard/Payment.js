import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';


const Payment = () => {
    const { id } = useParams()
    // const url = `http://localhost:5000/part/${id}`
    // console.log(url);
    // const { data, isLoading } = useQuery(['part', id], () => fetch(url).then(res => res.json()))
    // console.log(data);

    // if (isLoading) {
    //     return <Loading></Loading>
    // }


    return (
        <div>
            <h2>ID: {id}</h2>
            {/* <h2>name:{appointment.name}</h2> */}

        </div>
    );
}

export default Payment;