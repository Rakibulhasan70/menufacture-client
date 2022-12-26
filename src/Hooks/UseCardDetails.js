import { useEffect, useState } from 'react';

const UseCardDetails = carId => {
    const [car, setCar] = useState([]);
    useEffect(() => {
        const url = `https://menufacture-server.onrender.com/part/${carId}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCar(data)
            })
    }, [car])
    return [car, setCar]
};

export default UseCardDetails;