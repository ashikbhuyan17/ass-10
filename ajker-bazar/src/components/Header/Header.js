
import React, { useContext, useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { UserContext } from '../../App';
import '../Orders/Order.css'


const Header = () => {

    // const [search, setSearch] = useState([])
    // const handleInput = (event) => {
    //     setSearch(event.target.value)
    // }
    // console.log(search);

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    console.log(loggedInUser);
    return (
        <div>
            <div className="header">
                <nav class="navbar navbar-expand-lg navbar-light ">
                    <div class="container-fluid">
                        <Link
                            to="/home"
                            class="navbar-brand justify-content-center"
                            style={{ color: "#ff8000", textDecoration: "none" }}
                        >
                            <h3>Ajker-Bazar</h3>
                        </Link>
                        <button
                            class="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div
                            class="collapse navbar-collapse justify-content-end"
                            id="navbarNavAltMarkup"
                        >
                            <div class="navbar-nav ">
                                <Link to="/home" class="nav-link active">
                                    <h4>Home</h4>
                                </Link>

                                <Link to="/orders" class="nav-link active">
                                    <h4>Orders</h4>
                                </Link>

                                <Link to="/admin" class="nav-link active">
                                    <h4>Admin</h4>
                                </Link>
                                <Link to="/deals" class="nav-link active">
                                    <h4>Deals</h4>
                                </Link>
                                {
                                    loggedInUser.email ? <img src={loggedInUser.photoURL} alt="Avatar" class="avatar my-1"></img> : <Link to="/login" class="nav-link active"><h4>Login</h4></Link>

                                }
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            {/* <div style={{ margin: "50px" }}>
                <input type="search" onChange={handleInput} class="form-control" name="" id="" placeholder="search...." />
            </div> */}
        </div>
    );
};

export default Header;