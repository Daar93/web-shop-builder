import { Link, Outlet } from "react-router-dom"
import "./NavigationBar.scss"

export default function NavigationBar() {
    return <div className="Layout">
        <nav>
            <ul>
                <li className="home-page">
                    <Link to="/">Home</Link>
                </li>
                <li className="login-page">
                    <Link to="/log-in">Log In</Link>
                </li>
                <li className="shopping-cart-page">
                    <Link to="/shopping-cart">Shopping Cart</Link>
                </li>
                <li className="registration-page">
                    <Link to="/registration">Registration</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
    </div>
}