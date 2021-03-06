import React, {useContext} from 'react';
import {Link, NavLink} from "react-router-dom";
import LinkScroll from "./LinkScroll";
import {GlobalContext} from "./GlobalContext";
import {Link as ScrollLink} from "react-scroll";


const TopMenu = () => {
    const isAuth = window.location.pathname === "/logowanie/" || window.location.pathname === "/rejestracja/";
    const isHome = window.location.pathname === "/";
    const [user, , firebaseFromGlobal] = useContext(GlobalContext);

    return (
        <div className="menu-wrapper">
            <div className="container">
                <div className="top-menu">
                    <div className="user-menu">
                        {
                            user
                                ? <>
                                    <h3 className="user-menu__email">Cześć {user.email}</h3>
                                    {
                                        isHome ? <NavLink className="user-menu__item accent"
                                                 to='/oddaj-rzeczy/'>Oddaj rzeczy
                                        </NavLink>
                                            : <ScrollLink className="user-menu__item accent" to={"survey-form"} spy={true} smooth={true} duration={500} >
                                                {"Formularz"}
                                            </ScrollLink>
                                    }
                                    <NavLink activeClassName="" className="user-menu__item home__mobile"
                                             to="/">Home
                                    </NavLink>
                                    <button className="user-menu__logout" onClick={firebaseFromGlobal.doSignOut}>Logout</button>
                                </>
                                : <>
                                    <NavLink activeClassName="" className="user-menu__item home__mobile"
                                             to="/">Home
                                    </NavLink>
                                    <NavLink className="user-menu__item" activeClassName="accent"
                                             to='/logowanie/'>Zaloguj</NavLink>
                                    <NavLink className={`user-menu__item ${!isAuth && "accent"}`} activeClassName="accent"
                                             to='/rejestracja/'>Załóż konto</NavLink>
                                </>
                        }
                    </div>

                    <nav className="navigation">
                        <ul className="navigation__list">
                            <li className="navigation__item">
                                <NavLink activeClassName="active" className="navigation__link" to="/">Start</NavLink>
                            </li>
                            {
                                isHome && <LinkScroll to='three-columns' text={"O co chodzi?"}/>
                            }
                            {
                                isHome && <LinkScroll to='about' text={"O nas"}/>
                            }
                            {
                                isHome && <LinkScroll to='foundations' text={"Fundacja i organizacje"}/>
                            }
                            {
                                !isHome && <LinkScroll to='survey-form' text={"Wypełnij formularz"}/>
                            }
                            <LinkScroll to='footer' text={"Kontakt"}/>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default TopMenu;