import React from "react";
import "../css/Player.css";
import Body from "./Body";
import Footer from "./Footer";
import SideBar from "./SideBar";

function Player() {
  return (
    <div className='player'>
      <div className='player__body'>
        <SideBar/>
        <Body/>
      </div>

      <Footer/>
    </div>
  );
}

export default Player;
