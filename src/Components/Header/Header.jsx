import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';

import "./Header.css"

function Header() {
    return (
        <div className="header">
            <div className='header__container'>
            <div className="header__container1">
                <img className="header__logo"  alt="logo" src="https://mk0cioeletsonli8u4uk.kinstacdn.com/wp-content/uploads/2019/12/bookmyshow.png"/>
                <div className="header__search">
                    <SearchIcon className="header__searchIcon"/>
                    <span>Search for Movies,Events,Plays</span>
                </div>
            </div>
            <div className="header__container2">
            <p>Bengaluru</p>
            <button>SignIn</button>
            <MenuIcon className="hamburger"/>
            </div>
            </div>
        </div>  
    )
}

export default Header
