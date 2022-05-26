import { useEffect, useState } from 'react';

const UseOrder = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://cryptic-retreat-89844.herokuapp.com/addItem')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])
    return [products, setProducts]

};

export default UseOrder;