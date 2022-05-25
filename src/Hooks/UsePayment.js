import React, { useEffect, useState } from 'react';

const UsePayment = id => {
    const [payment, setPayment] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/myorder/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setPayment(data)
            })
    }, [payment])
    return [payment, setPayment]
};

export default UsePayment;