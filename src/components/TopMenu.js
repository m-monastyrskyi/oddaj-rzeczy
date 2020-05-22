import React from 'react';
import {Link} from "react-router-dom";

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
                            <li className="navigation__item"><Link className="navigation__link active"
                                                                   to='#'>Start</Link></li>
                            <li className="navigation__item"><Link className="navigation__link" to='#'>O co
                                chodzi?</Link></li>
                            <li className="navigation__item"><Link className="navigation__link" to='#'>O nas</Link></li>
                            <li className="navigation__item"><Link className="navigation__link" to='#'>Fundacja i
                                organizacje</Link></li>
                            <li className="navigation__item"><Link className="navigation__link" to='#'>Kontakt</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default TopMenu;