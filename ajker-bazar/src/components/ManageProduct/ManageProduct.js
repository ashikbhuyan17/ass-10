import React, { useEffect, useState } from 'react';
import Admin from '../Admin/Admin';
import Delete from '../icons/delete.png'
import Edit from '../icons/edit.png'
const ManageProduct = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('http://localhost:9000/booking')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])


    function deleteProduct(id, event) {

        console.log("delete", id)
        fetch(`http://localhost:9000/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log("deleted successfully")
                if (result) {
                    window.location.reload();
                }

            })
    }

    console.log(product);
    product.map(pd => console.log(pd.name, pd.price))
    return (
        <div>
            <Admin />
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Product Name</th>
                        <th scope="col">Weight</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>

                {
                    product.map(pd =>
                        <tbody>
                            <tr>
                                <th scope="row">{pd.name}</th>
                                <td>{pd.wight}</td>
                                <td>{pd.price}</td>
                                <td><img src={Delete} onClick={() => deleteProduct(pd._id)} alt="" width="20px" /> <img src={Edit} alt="" width="20px" /></td>
                            </tr>
                        </tbody>)
                }
            </table>
        </div>
    );
};

export default ManageProduct;