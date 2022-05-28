import React from 'react';
import {sidebarData} from './sidebarData';

export default function Navbar(props) {

    const sidebar = sidebarData.map((item,index) => {
        return(
            <li key={index} className='nav__sidebar-item' onClick={props.closeMenu}>
                <a href={item.path}>{item.text}</a>
            </li>
        )
    });

    return(
        <nav className={props.openMenu ? "nav-active" : "nav"}>
        <ul className='nav__sidebar'>
            {sidebar}
        </ul>
    </nav>
    )
}
