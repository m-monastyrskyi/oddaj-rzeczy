import React, {useState} from 'react';
import axios from "axios";
import {validate} from "../API/api";

const FooterForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});
    const [serverResponse, setServerResponse] = useState('');

    const sendMessage = () => {
        axios.post('https://fer-api.coderslab.pl/v1/portfolio/contact', {
            name,
            email,
            message
        })
            .then(response => {
                console.log(response);
                if (response.status === 200) {
                    setServerResponse('Wiadomość została wysłana! Wkrótce się skontaktujemy!');
                    setName('');
                    setEmail('');
                    setMessage('');
                    setTimeout(()=>{
                        setServerResponse('');
                    },3000)
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    const handleSubmit = e => {
        e.preventDefault();
        const result = validate(name, email, message);
        result.ok ? sendMessage() : setErrors(result);
    }

    return (
        <footer className="footer" >
            <div className="container">
                <div className="contact__wrapper">
                    <div className="section-contact">
                        <div className="section-contact__title">
                            <h2 className="decoration">Skontaktuj się z nami</h2>
                        </div>
                        {
                            serverResponse && <h3 className="message-sent">{serverResponse}</h3>
                        }
                        <form className="section-contact__form" onSubmit={handleSubmit}>
                            <div className="input-wrapper">
                                <label className="form__label" htmlFor="name">Wpisz swoje imię</label>
                                <input
                                    className={errors.name ? "form__input error__input" : "form__input"}
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Krzysztof"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    onFocus={() => {
                                        setErrors({});
                                    }}
                                />
                                {
                                    errors.name && <h3 className="error__text">{errors.name}</h3>
                                }
                            </div>
                            <div className="input-wrapper">
                                <label className="form__label" htmlFor="email">Wpisz swój email</label>
                                <input
                                    className={errors.email ? "form__input error__input" : "form__input"}
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="abc@xyz.pl"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    onFocus={() => setErrors({})}
                                />
                                {
                                    errors.email && <h3 className="error__text">{errors.email}</h3>
                                }
                            </div>
                            <label className="form__label" htmlFor="message">Wpisz swoją wiadomość</label>
                            <textarea
                                rows="4"
                                className={errors.message ? "form__input error__input" : "form__input"}
                                id="message"
                                name="message"
                                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                value={message}
                                onChange={e => setMessage(e.target.value)}
                                onFocus={() => setErrors({})}
                            />
                            {
                                errors.message && <h3 className="error__text">{errors.message}</h3>
                            }
                            <div className="submit__wrapper">
                                <button className="form__submit btn" type="submit">Wyślij</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterForm;