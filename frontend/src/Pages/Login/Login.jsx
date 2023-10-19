import { useEffect, useState } from "react";
import { Buffer } from "buffer";

import "./Login.scss";
import Swal from "sweetalert2";

const BACKEND_ENDPOINT = "http://localhost:8080";
const BACKEND_LOGIN = "http://localhost:8080/login";
const BACKEND_CUSTOMIZED = "http://localhost:8080/messages/authorized/customized";

export default function LoginPage() {
    const [userInformation, setUserInformation] = useState({});
    const [token, setToken] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // useEffect(() => {
    //     fetch("http://localhost:8080/messages/authorized")
    //         .then(res => res.text())
    //         .then(data => setLoginCredentials(data))
    //         .catch(error => console.error('Fetch error:', error));
    // }, [])

    function onInputChange(event) {
        userInformation[event.target.name] = event.target.value;
        setUserInformation(userInformation);
    }

    function handleLogin(event) {
        event.preventDefault();
        console.log(userInformation.userName);
        console.log(userInformation.password);

        const headers = new Headers();
        const auth = Buffer.from(
            userInformation.userName + ":" + userInformation.password
        ).toString("base64");
        headers.set("Authorization", "Basic " + auth);
        return fetch(BACKEND_LOGIN, { method: "GET", headers: headers })
            .then(response => response.text())
            .then(jwt => {
                setToken(jwt);
                console.log("JWT: " + jwt);
                localStorage.setItem("jwt", jwt);
            })
            .catch(error => console.log("ERROR: " + error))
        // if(!isDataValid) {
        //     Swal.fire({
        //         icon: "error",
        //         title: "Oops...",
        //         text: "These login credentials are already in use."
        //     });
        // } else {
        //     Swal.fire({
        //         icon: "success",
        //         title: "Log In Process",
        //         text: "Please Wait..."
        //     });
        // }
    }

    function handleCustomized(event) {
        event.preventDefault();

        const jwt = localStorage.getItem("jwt");
        if (!jwt) {
            alert("JWT is not provided");
        }

        const headers = new Headers();
        headers.set("Authorization", `Bearer ${token}`);

        return fetch(BACKEND_CUSTOMIZED, { method: "GET", headers: headers })
            .then(response => response.text())
            .then(data => {
                console.log("YES");
            })
            .catch(error => console.log("ERROR: " + error))
    }

    return <>
    <div className="container">
        <div className="login-card"> 
            <div className="login">
                <form className="login-form">
                    <input 
                        name="userName"
                        onChange={ onInputChange }
                        placeholder="Name"
                    ></input>
                    <input 
                        name="password"
                        onChange={ onInputChange }
                        placeholder="Password"
                        type="password"
                    ></input>
                    <button type="submit" onClick={ handleLogin }>Log In</button>
                    <button type="submit" onClick={ handleCustomized }>Customized</button>
                </form>
            </div> 
        </div>
    </div>
    </>
};