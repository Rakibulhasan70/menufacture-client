import { useEffect, useState } from 'react';

const UsePart = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://menufacture-server.onrender.com/part')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])
    return [products, setProducts]

};

export default UsePart;