import { useEffect, useState } from 'react';

const UseOrder = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/addItem')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])
    return [products, setProducts]

};

export default UseOrder;