import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {validateAuth} from "../API/api";

const AuthForm = ({register, firebase}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [formErrors, setFormErrors] = useState({});
    const [serverError, setSeverError] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationResult = register ? validateAuth(email, password, repeatPassword) : validateAuth(email, password);

        console.log(validationResult);

        if (validationResult.ok) {
            register
                ? firebase.doCreateUserWithEmailAndPassword(email, password)
                    .then(authUser => {
                        setEmail("");
                        setPassword("");
                        setRepeatPassword("");
                    })
                    .catch(error => {
                        setSeverError(error);
                        console.log(error);
                    })
                : firebase.doSignInWithEmailAndPassword(email, password)
                    .then(() => {
                        setEmail("");
                        setPassword("");
                    })
                    .catch(error => {
                        setSeverError(error);
                        console.log(error);
                    });
        } else {
            setFormErrors(validationResult);
        }

    }

    return (
        <section className="auth-page">

            <div className="auth-page__title ">
                <h1 className="decoration">
                    {register ? "Załóż konto" : "Zaloguj się"}
                </h1>
            </div>
            <h3 className="error__text">{serverError.message}</h3>
            <form className="auth-form" onSubmit={handleSubmit}>
                <div className="auth-form__inputs">
                    <label className="form__label" htmlFor="name">Email</label>
                    <input
                        className={formErrors.email ? "form__input error__input" : "form__input"}
                        id="email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        onFocus={() => {
                            setFormErrors({});
                        }}
                    />
                    {
                        formErrors.email && <h3 className="error__text">{formErrors.email}</h3>
                    }

                    <label className="form__label" htmlFor="password">Hasło</label>
                    <input
                        className={formErrors.password ? "form__input error__input" : "form__input"}
                        id="password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        onFocus={() => {
                            setFormErrors({});
                        }}
                    />
                    {
                        formErrors.password && <h3 className="error__text">{formErrors.password}</h3>
                    }

                    {
                        register && <>
                            <label className="form__label" htmlFor="repeatPassword">Powtórz hasło</label>
                            <input
                                className={formErrors.repeatPassword ? "form__input error__input" : "form__input"}
                                id="repeatPassword"
                                name="repeatPassword"
                                type="password"
                                value={repeatPassword}
                                onChange={e => setRepeatPassword(e.target.value)}
                                onFocus={() => {
                                    setFormErrors({});
                                }}
                            />
                            {
                                formErrors.repeatPassword &&
                                <h3 className="error__text">{formErrors.repeatPassword}</h3>
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