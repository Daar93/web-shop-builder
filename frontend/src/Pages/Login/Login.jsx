import { useEffect, useState } from "react";
import "./Login.scss";
import { eventWrapper } from "@testing-library/user-event/dist/utils";

const LoginPage = () => {
    const [name, setName] = useState(null);
    const [password, setPassword] = useState(null);
    const [loginCredentials, setLoginCredentials] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        fetch("http://localhost:8080/users")
            .then(res => res.json())
            .then(data => setLoginCredentials(data))
    }, [])

    console.log(loginCredentials);
    function handleClick(event) {
        event.preventDefault();

        const isDataValid = loginCredentials.some(credentials => 
            credentials.name === name && credentials.password === password
        );

        console.log(name, password);
        console.log(isDataValid);

        setIsLoggedIn(isDataValid);
    }

    return <div className="login">
        <form className="login-form">
            <input 
                onChange={(event) => setName(event.target.value)}
                placeholder="Name"
            ></input>
            <input 
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Password"
                type="password"
            ></input>
            <button type="submit" onClick={ handleClick }>Submit</button>
        </form>
    </div> 
};

export default LoginPage;