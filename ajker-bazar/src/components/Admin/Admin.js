import React from 'react';
import { Link } from 'react-router-dom';
import './Admin.css'
const Admin = () => {
    return (
        // <div class="sidenav">
        //     <Link to="/manageProduct" class="nav-link">
        //         <h5>Manage Product</h5>
        //     </Link>
        //     <Link to="/addProduct" class="nav-link active">
        //         <h5>Add Product</h5>
        //     </Link>
        //     <Link to="/editProduct" class="nav-link ">
        //         <h4>Edit Product</h4>
        //     </Link>
        // </div>
        <div className="productHeaderContainer">
            <div className="productHeader">
                <Link className="nav-link navHeader" to="/home">Human Bazar</Link>
                <Link className="nav-link navHeader " to="/addProduct">Add Product</Link>
                <Link className="nav-link navHeader" to="/manageProduct">Manage Product</Link>
                {/* <Link className="nav-link navHeader" to="/editProduct">Edit Product</Link> */}
            </div>
        </div>

    );
};

export default Admin;