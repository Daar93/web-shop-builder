import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import NavigationBar from "./Pages/Layout/NavigationBar.jsx";
import ErrorPage from "./Pages/Error/Error.jsx";
import LoginPage from "./Pages/Login/Login.jsx";
import LandingPage from "./Pages/Landing/Landing.jsx"
<<<<<<< HEAD
import RegistrationPage from "./Pages/Registration/Registration";
=======
import ProductListingPage from "./Pages/ProductListing/ProductListing.jsx";
>>>>>>> origin/main

import "./index.scss";
import ShoppingCartPage from "./Pages/ShoppingCart/ShoppingCart";


const router = createBrowserRouter([
  {
    path: "/",
<<<<<<< HEAD
    element: <NavigationBar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <LandingPage/>
      },
      {
        path: "/log-in",
        element: <LoginPage />
      },
      {
        path: "/registration",
        element: <RegistrationPage />
      },
      {
        path: "/shopping-cart",
        element: <ShoppingCartPage />
      },
    ],
=======
    element: <LoginPage />,
  },
  {
    path: "/landing",
    element: <LandingPage />,
  },
  {
    path: "/products",
    element: <ProductListingPage />,
  },
  {
    path: "/create",
    element: "", // You can add a component for the create route if needed
  },
  {
    path: "/error",
    element: <ErrorPage />,
>>>>>>> origin/main
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();