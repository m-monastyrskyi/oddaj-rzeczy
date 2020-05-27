import React from 'react';
import TopMenu from "./TopMenu";
import {Link} from "react-router-dom";

const Logout = () => {
    return (
        <>
            <TopMenu/>
            <section className="logout-page">
                <div className="logout-page__title">
                    <h1 className="decoration">Wylogowanie nastąpiło pomyślnie!</h1>
                </div>
                <Link className="auth-form__btn" to="/">Strona główna</Link>
            </section>
        </>
    );
};

export default Logout;