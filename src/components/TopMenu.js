import React from 'react';
import {NavLink} from "react-router-dom";
import LinkScroll from "./LinkScroll";

const TopMenu = () => {
    const isAuth = window.location.pathname === "/logowanie/" || window.location.pathname === "/rejestracja/";

    return (
        <div className="menu-wrapper">
            <div className="container">
                <div className="top-menu">
                    <div className="user-menu">
                        <NavLink className="user-menu__item" activeClassName="accent" to='/logowanie/'>Zaloguj</NavLink>
                        <NavLink className={`user-menu__item ${!isAuth && "accent"}`} activeClassName="accent"
                                 to='/rejestracja/'>Załóż konto</NavLink>
                    </div>

                    <nav className="navigation">
                        <ul className="navigation__list">
                            <li className="navigation__item">
                                <NavLink activeClassName="active" className="navigation__link" to="/">Start</NavLink>
                            </li>
                            <LinkScroll to='three-columns' text={"O co chodzi?"}/>
                            <LinkScroll to='about' text={"O nas"}/>
                            <LinkScroll to='foundations' text={"Fundacja i organizacje"}/>
                            <LinkScroll to='footer' text={"Kontakt"}/>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default TopMenu;