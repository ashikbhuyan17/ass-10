import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import ShowProduct from '../ShowProduct/ShowProduct';
import './Home.css'

const Home = () => {
    const [products, setProducts] = useState([]);
    // const [search, setSearch] = useState()

    useEffect(() => {
        fetch('http://localhost:9000/booking')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])

    // const handleInput = (event) => {
    //     setSearch(event.target.value)
    //     // console.log(event.target.value);
    // }
    // console.log(search);
    return (
        // <div className="row">
        //     {
        //         products.map(product => <ShowProduct product={product}></ShowProduct>)
        //     }
        // </div>


        <div>
            <Header />
            {/* 
            <div style={{ margin: "50px" }}>
                <input type="search" onChange={handleInput} class="form-control" name="" id="" placeholder="search...." />
            </div> */}

            <div className="row homeContainer">
                <div className="productContainer">
                    {
                        products.length === 0 && <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate("-50%,-50%")' }} className="spinner-border text-danger" role="status">
                            <span class="visually-hidden">Loading...</span></div>

                    }
                    {
                        products.map(product => <ShowProduct product={product} key={product._id}></ShowProduct>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;
