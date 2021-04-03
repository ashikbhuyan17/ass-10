import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { UserContext } from "../../App";

const CheckOut = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const [product, setProduct] = useState({});
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
      })
  }

  return (
    <div>
      <h2>checkOut</h2>
      {/* <h2>{product._id}</h2> */}
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Description</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{product.name}</td>
            <td>1</td>
            <td>{product.price}</td>
          </tr>

        </tbody>
      </table>

      <button onClick={handleCheckOut} type="submit">CheckOut</button>
    </div>
  );
};

export default CheckOut;

