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
            .catch(error => console.error('Fetch error:', error));
    }, [])

    console.log(loginCredentials);

    function onInputChange(event) {
        userInformation[event.target.name] = event.target.value;
        setUserInformation(userInformation);
    }

    function handleSubmit(event) {
        event.preventDefault();

        const isAlreadyInUsage = loginCredentials.some(credentials => 
            credentials.name === userInformation.userName &&
            credentials.password === userInformation.password
        );

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'These login credentials are already in use.'
        });


        console.log(isAlreadyInUsage)
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