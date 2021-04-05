import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Orders from "./components/Orders/Orders";
import Home from "./components/Home/Home";
import Deals from "./components/Deals/Deals";
import Login from "./components/Login/Login";
import CheckOut from "./components/CheckOut/CheckOut";
import { createContext, useState } from "react";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import AddProduct from "./components/AddProduct/AddProduct";
import Admin from "./components/Admin/Admin";
import ManageProduct from "./components/ManageProduct/ManageProduct";


export const UserContext = createContext()

function App() {
    const [loggedInUser, setLoggedInUser] = useState({})
    console.log('data is ', loggedInUser);
    return (

        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/home">
                        <Home />
                    </Route>
                    <Route exact path="/header">
                        <Header />
                    </Route>
                    <PrivateRoute path="/orders">
                        <Orders />
                    </PrivateRoute>
                    <Route path="/admin">
                        <AddProduct />
                    </Route>
                    <Route path="/addProduct">
                        <AddProduct />
                    </Route>
                    <Route path="/manageProduct">
                        <ManageProduct />
                    </Route>
                    <Route path="/deals">
                        <Deals />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <PrivateRoute path="/checkOut/:id">
                        <CheckOut />
                    </PrivateRoute>
                </Switch>
            </Router>
        </UserContext.Provider>

    );
}

export default App;
