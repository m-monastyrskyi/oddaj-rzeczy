import React from 'react';
import {Link} from "react-router-dom";
import LinkScroll from "./LinkScroll";

const TopMenu = () => {
    return (
        <div className="menu-wrapper">
            <div className="container">
                <div className="top-menu">
                    <div className="user-menu">
                        <Link className="user-menu__item" to='/logowanie/'>Zaloguj</Link>
                        <Link className="user-menu__item accent" to='/rejestracja/'>Załóż konto</Link>
                    </div>

                    <nav className="navigation">
                        <ul className="navigation__list">
                            <LinkScroll to='header' text={"Start"}/>
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