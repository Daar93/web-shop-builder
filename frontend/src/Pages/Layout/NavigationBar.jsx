import { Link, Outlet } from "react-router-dom"
import logo from './../../shared/images/logo.png';
import shoppingCart from "./../../shared/images/shopping-cart.png"

import "./NavigationBar.scss"

export default function NavigationBar() {
    return <div className="Layout">
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
                <li className="shopping-cart-page">
                    <Link to="/shopping-cart"><img src={ shoppingCart } alt="Logo" className="shopping-cart-logo"/></Link>
                </li>
            </ul>
        </nav>
        <Outlet />
    </div>
}