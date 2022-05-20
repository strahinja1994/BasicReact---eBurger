import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBars,  faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function Header(props) {

    return(
        <header className='header'>
        <div className='header__logo'>
            <h1 className='header__logo-title'>eBurger</h1>
        </div>
        <div className='header__phone'>
            <span className='header__phone-decoration'></span>
            <p className='header__phone-number'>+ 021/555-333</p>
        </div>
        <div className='header__icons'>
            <FontAwesomeIcon icon={faShoppingCart} className='header__icons-icon'></FontAwesomeIcon>
            <FontAwesomeIcon icon={faBars} className='header__icons-icon' onClick={props.showMenu}></FontAwesomeIcon>
        </div>
    </header>
    )
}