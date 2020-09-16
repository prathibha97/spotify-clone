import React from "react";
import "../css/SideBar.css";
import SideBarOptions from "./SideBarOption";

function SideBar() {
  return (
    <div className='sideBar'>
        <img className='sideBar__logo' src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=""/>
        <SideBarOptions title='Home'/>
        <SideBarOptions title='Search'/>
        <SideBarOptions title='Your Library'/>
    </div>
  );
}

export default SideBar;
