import { useEffect, useState } from "react";
import { Buffer } from "buffer";

import "./Login.scss";
import Swal from "sweetalert2";

const BACKEND_ENDPOINT = "http://localhost:8080/messages";

export default function LoginPage() {
    const [userInformation, setUserInformation] = useState({});
    const [loginCredentials, setLoginCredentials] = useState(null);
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

    function handleSubmit(event) {
        event.preventDefault();
        console.log(userInformation.userName);
        console.log(userInformation.password);

        const headers = new Headers();
        const auth = Buffer.from(
            userInformation.userName + ":" + userInformation.password
        ).toString("base64");
        headers.set("Authorization", "Basic " + auth);
        return fetch(BACKEND_ENDPOINT + "/authorized", { method: "GET", headers: headers })
            .then(response => response.text())
            .then(data => {
                setLoginCredentials(data);
                console.log(data);
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
                    <button type="submit" onClick={ handleSubmit }>Log In</button>
                </form>
            </div> 
        </div>
    </div>
    </>
};
