import React from "react";
import './Header.css';
import logo from '../img/logo.png';
import userAvatar from '../img/avatar.png';
import {Avatar} from "@material-ui/core";

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src={logo} alt="ReactPlay"/>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <Avatar src={userAvatar}/>
                </a>
            </div>
        </header>
    )
}
