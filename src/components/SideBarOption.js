import React from 'react';
import '../css/SideBarOption.css';

function SideBarOptions({title, Icon}) {
    return (
        <div className='sidebarOption'>
            <p>{title}</p>
        </div>
    )
}

export default SideBarOptions;