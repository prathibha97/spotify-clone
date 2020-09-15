import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login";
import { getTokenFromUlr } from "./spotify";

function App() {
  const [token, setToken] = useState(null);

  // run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUlr();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      setToken(_token);
    }
    console.log("i have a token >> ", token);
  }, []);

  return <div className='app'>{token ? <h1>logged in</h1> : <Login />}</div>;
}

export default App;
