import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="header__image"/>

            <div className="header__content">
                <h2 className="header__title decoration">Zacznij pomagać!<br/>Oddaj niechciane rzeczy w zaufane ręce</h2>
                <div className="header__cta">
                    <Link className="header__btn btn" to="/logowanie/">Oddaj<br/>rzeczy</Link>
                    <Link className="header__btn btn" to="/logowanie/">Zorganizuj<br/>zbiórkę</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;