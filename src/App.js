import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login";
import { getTokenFromUlr } from "./spotify";
import SpotityWebApi from "spotify-web-api-js";
import Player from "./components/Player";

const spotify = new SpotityWebApi();

function App() {
  const [token, setToken] = useState(null);

  // run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUlr();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        console.log("person", user);
      });
    }
    console.log("i have a token >> ", token);
  }, []);

  return <div className='app'>
    {token ? 
    <Player/>
    : <Login />}
  
  </div>;
}

export default App;
