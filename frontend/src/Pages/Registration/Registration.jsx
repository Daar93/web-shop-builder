import { useEffect, useState } from "react";
import "./Registration.scss";
import Swal from "sweetalert2";

export default function RegistrationPage() {
    const [userInformation, setUserInformation] = useState({});
    const [loginCredentials, setLoginCredentials] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        fetch("http://localhost:8080/users")
            .then(res => res.json())
            .then(data => setLoginCredentials(data))
    }, [])

    console.log(loginCredentials);

    function onInputChange(event) {
        userInformation[event.target.name] = event.target.value;
        setUserInformation(userInformation);
    }

    function handleSubmit(event) {
        event.preventDefault();

        const isAlreadyInUsage = loginCredentials.some(credentials => 
            credentials.name === userInformation.userName && credentials.password === userInformation.password
        );

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'These login credentials are already in use.'
        });
        
        // if(!isAlreadyInUsage) {
        //     fetch("http://localhost:8080/users/create", {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application.json"
        //         },
        //         body: JSON.stringify({
        //             "name": userInformation.name,
        //             "password": userInformation.password
        //         })
        //     })
        //     .then(res => {
        //         if (!res.ok) {
        //             throw new Error("Network response failed");
        //         }
        //         return res.json();
        //     })
        //     .then(data => console.log(data))
        //     .catch(error => console.log("There was a problem with the fetch operation: " + error.message));
        // } else {
        //     Swal.fire({
        //         icon: 'error',
        //         title: 'Oops...',
        //         text: 'These login credentials are already in use.'
        //     });
        // }
    }

    return <div className="registration">
        <form>
            <input 
                name="name" 
                placeholder="Full name"
                onChange={ onInputChange }
            />
            <input 
                name="email" 
                placeholder="Email adress"
                onChange={ onInputChange }
            />
            <button type="submit" onClick={ handleSubmit }>Registrate</button>
        </form>
    </div>
}