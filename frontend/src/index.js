import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import ErrorPage from "./Pages/Error/Error.jsx";
import LoginPage from "./Pages/Login/Login.jsx";
import LandingPage from "./Pages/Landing/Landing.jsx"

import "./index.scss";


const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <LandingPage/>
      },
      {
        path: "/create",
        element: ""
      },
    ],
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