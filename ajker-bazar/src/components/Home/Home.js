import React, { useEffect, useState } from 'react';
import ShowProduct from '../ShowProduct/ShowProduct';


const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:9000/booking')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])
    return (
        <div className="row">
            {
                products.map(product => <ShowProduct product={product}></ShowProduct>)
            }
        </div>
    );
};

export default Home;
