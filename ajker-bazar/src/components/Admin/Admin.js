import React from 'react';
import { Link } from 'react-router-dom';
import './Admin.css'
const Admin = () => {
    return (
        <div class="sidenav">
            {/* <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#clients">Clients</a>
            <a href="#contact">Contact</a> */}



            <Link to="/manageProduct" class="nav-link">
                <h5>Manage Product</h5>
            </Link>
            <Link to="/addProduct" class="nav-link active">
                <h5>Add Product</h5>
            </Link>
            <Link to="/editProduct" class="nav-link ">
                <h4>Edit Product</h4>
            </Link>
        </div>

    );
};

export default Admin;