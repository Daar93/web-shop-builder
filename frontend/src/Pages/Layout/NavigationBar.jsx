import { Link, Outlet } from "react-router-dom"
import logo from './../../shared/images/logo.png';
import shoppingCart from "./../../shared/images/shopping-cart.png"
import userLogo from "./../../shared/images/user.png"
import { createContext, useState } from "react";

import "./NavigationBar.scss"

export const AppContext = createContext([]);

export default function NavigationBar() {
    const [productList, setProductList] = useState([]);

    return <div className="Layout">
        <AppContext.Provider value={{ productList, setProductList }}>
            <nav>
                <ul>
                    <li className="logo-container">                    
                        <Link to="/"><img src={logo} alt="Logo" className="logo"></img></Link>
                    </li>
                    <li className="home-page">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="login-page">
                        <Link to="/log-in">Log In</Link>
                    </li>
                    <li className="registration-page">
                        <Link to="/registration">Registration</Link>
                    </li>
                    <li className="product-listing-page">
                        <Link to="/products">Products</Link>
                    </li>
                    <li className="shopping-cart-page">
                        <Link to="/shopping-cart"><img src={ shoppingCart } alt="Logo" className="shopping-cart-logo"/></Link>
                    </li>
                    <li className="user-page">
                        <Link to="/user">
                            <div className="logo-wrapper">
                                <img src={userLogo} alt="" className="user-logo"/>
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </AppContext.Provider>
    </div>
}