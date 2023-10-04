import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState("Hallo");
  const [loginCredentials, setLoginCredentials] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/users")
      .then(res => res.json())
      .then(data => setLoginCredentials(data));
  }, []);

  function handleClick() {
    setText(text + 1);
  }
  console.log(loginCredentials);


  return <>
    <div>{ text }</div>
    <button onClick={ handleClick }>Add 1</button>
  </>;
}

export default App;
