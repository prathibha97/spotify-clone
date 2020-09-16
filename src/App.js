import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login";
import { getTokenFromUlr } from "./spotify";
import SpotityWebApi from "spotify-web-api-js";
import Player from "./components/Player";
import { StateProviderValue } from "./context/StateProvider";

const spotify = new SpotityWebApi();

function App() {
  const [{ user, token }, dispatch] = StateProviderValue();

  // run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUlr();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlist) => {
        dispatch({
          type: "SET_PLAYLIST",
          playlist: playlist,
        });
      });
    }
  }, []);

  return (
    <div className='app'>
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
