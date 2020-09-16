import React from "react";
import "../css/SideBar.css";
import SideBarOptions from "./SideBarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

function SideBar() {
  return (
    <div className='sideBar'>
      <img
        className='sideBar__logo'
        src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
        alt=''
      />
      <SideBarOptions Icon={HomeIcon} title='Home' />
      <SideBarOptions Icon={SearchIcon} title='Search' />
      <SideBarOptions Icon={LibraryMusicIcon} title='Your Library' />
      <br />
      <strong className='sideBar__title'>PLAYLISTS</strong>

      <hr />
      <SideBarOptions title='Hip Hop' />
      <SideBarOptions title='Hip Hop' />
      <SideBarOptions title='Pop' />
    </div>
  );
}

export default SideBar;
