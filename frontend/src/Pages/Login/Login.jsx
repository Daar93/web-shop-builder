import { useEffect, useState } from "react";

import "./Login.scss";
import Swal from "sweetalert2";

export default function LoginPage() {
    const [userInformation, setUserInformation] = useState({});
    const [loginCredentials, setLoginCredentials] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        fetch("http://localhost:8080/users")
            .then(res => res.json())
            .then(data => setLoginCredentials(data))
    }, [])

    function onInputChange(event) {
        userInformation[event.target.name] = event.target.value;
        setUserInformation(userInformation);
    }

    function handleSubmit(event) {
        event.preventDefault();

        const isDataValid = loginCredentials.some(credentials => 
            credentials.name === userInformation.userName &&
            credentials.password === userInformation.password
        );
        
        setIsLoggedIn(isDataValid);

        if(!isDataValid) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "These login credentials are already in use."
            });
        } else {
            Swal.fire({
                icon: "success",
                title: "Log In Process",
                text: "Please Wait..."
            });
        }
    }

    return <div className="container">
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
};
