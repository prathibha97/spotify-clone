import React from "react";
import "../css/Player.css";
import Body from "./Body";
import Footer from "./Footer";
import SideBar from "./SideBar";

function Player({ spotify }) {
  return (
    <div className='player'>
      <div className='player__body'>
        <SideBar />
        <Body spotify={spotify} />
      </div>
      <Footer spotify={spotify} />
    </div>
  );
}

export default Player;
