import React from 'react';
import "./header.css";
import HomeIcon from '@material-ui/icons/Home';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div className="header">
            <div className="header__icons">
                <div className="header__icon header__icon--active">
                    <HomeIcon />
                    <p>Home</p>
                </div>
                <div className="header__icon">
                    <FlashOnIcon />
                    <p>Home</p>
                </div>
                <div className="header__icon">
                    <VideoLibraryIcon />
                    <p>Home</p>
                </div>
                <div className="header__icon">
                    <SearchIcon />
                    <p>Home</p>
                </div>
                <div className="header__icon">
                    <LiveTvIcon />
                    <p>Home</p>
                </div>
                <div className="header__icon">
                    <PersonOutlineIcon />
                    <p>Home</p>
                </div>                
                
                
                
                
            </div>
            <img 
                src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
                alt=""
            />

        </div>
    )
}

export default Header;