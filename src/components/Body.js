import { Favorite, MoreHoriz, PlayCircleFilled } from "@material-ui/icons";
import React from "react";
import { StateProviderValue } from "../context/StateProvider";
import "../css/Body.css";
import Header from "./Header";
import SongRow from "./SongRow";

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = StateProviderValue();
  return (
    <div className='body'>
      <Header spotify={spotify} />
      <div className='body__info'>
        <img src={discover_weekly?.images[0]?.url} alt='' />
        <div className='body__infoText'>
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className='body__songs'>
        <div className='body__icons'>
          <PlayCircleFilled className='body__shuffle' />
          <Favorite className='large' />
          <MoreHoriz />
        </div>
        {/* list of songs */}
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
