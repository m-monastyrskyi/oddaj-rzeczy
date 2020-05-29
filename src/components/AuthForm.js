import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {validateAuth} from "../API/api";

const AuthForm = ({register}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const result = register ? validateAuth(email, password, repeatPassword) : validateAuth(email, password);

        console.log(result);
        result.ok ? alert("Ok") : setErrors(result);

    }

    return (
        <section className="auth-page">

            <div className="auth-page__title ">
                <h1 className="decoration">
                    {register ? "Załóż konto" : "Zaloguj się"}
                </h1>
            </div>

            <form className="auth-form" onSubmit={handleSubmit}>
                <div className="auth-form__inputs">
                    <label className="form__label" htmlFor="name">Email</label>
                    <input
                        className={errors.email ? "form__input error__input" : "form__input"}
                        id="email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        onFocus={() => {
                            setErrors({});
                        }}
                    />
                    {
                        errors.email && <h3 className="error__text">{errors.email}</h3>
                    }

                    <label className="form__label" htmlFor="password">Hasło</label>
                    <input
                        className={errors.password ? "form__input error__input" : "form__input"}
                        id="password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        onFocus={() => {
                            setErrors({});
                        }}
                    />
                    {
                        errors.password && <h3 className="error__text">{errors.password}</h3>
                    }

                    {
                        register && <>
                            <label className="form__label" htmlFor="repeatPassword">Powtórz hasło</label>
                            <input
                                className={errors.repeatPassword ? "form__input error__input" : "form__input"}
                                id="repeatPassword"
                                name="repeatPassword"
                                type="password"
                                value={repeatPassword}
                                onChange={e => setRepeatPassword(e.target.value)}
                                onFocus={() => {
                                    setErrors({});
                                }}
                            />
                            {
                                errors.repeatPassword && <h3 className="error__text">{errors.repeatPassword}</h3>
                            }
                        </>
                    }
                </div>
                <div className="auth-form__btns">
                    {
                        register ? <>
                            <Link className="auth-form__link" to="/logowanie/">Zaloguj się</Link>
                            <button className="auth-form__btn">Załóż konto</button>
                        </> : <>
                            <Link className="auth-form__link" to="/rejestracja/">Załóż konto</Link>
                            <button className="auth-form__btn">Zaloguj się</button>
                        </>
                    }
                </div>
            </form>
        </section>
    );
};

export default AuthForm;