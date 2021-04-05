import React, { useContext, useEffect, useState } from "react";
import { Redirect, useParams } from "react-router";
import { useHistory } from 'react-router-dom';
import { UserContext } from "../../App";
import Header from "../Header/Header";
import './CheckOut.css'

const CheckOut = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const [product, setProduct] = useState({});
  const history = useHistory()
  console.log(product)
  const { id } = useParams();
  console.log(id)
  useEffect(() => {
    fetch(`http://localhost:9000/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const handleCheckOut = () => {
    const newCheckOut = { ...loggedInUser, ...product, orderTime: new Date().toDateString('dd/mm/yyyy') }
    console.log(newCheckOut);
    delete newCheckOut._id;
    fetch('http://localhost:9000/addCheckOut', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newCheckOut)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        // alert("checkout Successfully Done.... !!")
        history.push('/orders')
        // history.replace('/orders')

        // < Redirect to = "/" />

      })
  }

  return (
    <div className="checkoutContainer">
      <Header />
      <div className="mainCheckBox">
        <h1>Checkout</h1>
        <div className="container checkoutBox">
          <div className="aboutBox">
            <h4>Description</h4>
            <h4>Quantity</h4>
            <h4>Price</h4>
          </div>
          <div className="productBox">
            <h3>{product.name}</h3>
            <h3>1</h3>
            <h3>${product.price}</h3>
          </div>
          <div className="totalBox">
            <h3>Total</h3>
            <h3>${product.price}</h3>
          </div>
        </div>
        {/* <button onClick={handleCheckOut} className="submitBtn" type="submit">Checkout</button> */}
        <button onClick={handleCheckOut} type="button" class="btn btn-success m-2 p-1">CheckOut</button>
      </div>
    </div>
  );
};

export default CheckOut;

