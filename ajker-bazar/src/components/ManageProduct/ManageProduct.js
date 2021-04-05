import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
        // const hidden = 
        console.log("delete", id)
        fetch(`http://localhost:9000/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log("deleted successfully")
                if (result) {
                    // window.location.reload();
                    console.log("display none");
                    document.getElementById('delete').style.display = 'none'
                    console.log(document.getElementById('delete').style.display = "none");
                }

            })
    }

    console.log(product);
    product.map(pd => console.log(pd.name, pd.price))
    return (
        <div>
            <Admin />
            {
                product.length === 0 && <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate("-50%,-50%")' }} className="spinner-border text-danger" role="status">
                    <span class="visually-hidden">Loading...</span></div>

            }
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
                        <tbody id="delete">
                            <tr>
                                <th scope="row">{pd.name}</th>
                                <td>{pd.wight}</td>
                                <td>{pd.price}</td>
                                <td><img src={Delete} onClick={() => deleteProduct(pd._id)} alt="" width="25px" class="m-2" />


                                    <img src={Edit} alt="" width="25px" data-bs-toggle="modal" data-bs-target="#exampleModal" /></td>
                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <div class="col-md-6">

                                                    <input name="name" placeholder={pd.name} type="text" class="form-control m-2" id="name" />
                                                    <input name="name" placeholder={pd.wight} type="text" class="form-control m-2" id="name" />
                                                    <input name="name" placeholder={pd.price} type="text" class="form-control m-2" id="name" />

                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </tr>
                        </tbody>)
                }
            </table>
            <Link to="/home">
                <button type="button" class="btn btn-warning my-5">Back To Home</button>
            </Link>
        </div>
    );
};

export default ManageProduct;