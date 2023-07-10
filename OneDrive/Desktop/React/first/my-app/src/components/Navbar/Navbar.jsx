import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import s from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav class={s.nav}>
            <div class={s.item}>
                <NavLink to={"/profile"} className = { navData => navData.isActive ? s.active : s.item }>Profile</NavLink>
            </div>
            <div class={s.item}>
                <NavLink to={"/dialogs"} className = { navData => navData.isActive ? s.active : s.item }>Messages</NavLink>
            </div>
            <div class={s.item}>
                <a>News</a>
            </div>
            <div class={s.item}>
                <a>Music</a>
            </div>
            <div class={s.item}>
                <a>Settings</a>
            </div>
        </nav>

    )
}

export default Navbar;
