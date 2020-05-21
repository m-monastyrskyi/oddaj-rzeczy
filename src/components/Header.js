import React from 'react';
import TopMenu from "./TopMenu";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="header__image"/>

            <div className="header__content">
                <h2 className="header__title">Zacznij pomagać!<br/>Oddaj niechciane rzeczy w zaufane ręce</h2>
                <div className="header__cta">
                    <Link className="header__btn" to="#">Oddaj<br/>rzeczy</Link>
                    <Link className="header__btn" to="#">Zorganizuj<br/>zbiórkę</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;