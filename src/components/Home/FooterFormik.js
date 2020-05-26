import React from 'react';
import {useFormik} from 'formik';

const validate = values => {
    const errors = {};
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    if (!values.name) {
        errors.name = 'Wymagane';
    } else if (values.name.indexOf(" ") >= 0) {
        errors.name = 'Podane imię jest nieprawidłowe!';
    }

    if (!values.email) {
        errors.email = 'Wymagane';
    } else if (!re.test(String(values.email).toLowerCase())) {
        errors.email = 'Podany email jest nieprawidłowy';
    }

    if (!values.message) {
        errors.message = 'Wymagane';
    } else if (values.message.length < 120) {
        errors.message = 'Wiadomość musi mieć conajmniej 120 znaków!';
    }

    return errors;
};

const FooterFormik = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <footer className="footer">
            <div className="container">
                <div className="section-contact">
                    <div className="section-contact__title">
                        <h2>Skontaktuj się z nami</h2>
                    </div>

                    <form onSubmit={formik.handleSubmit}>
                        <label htmlFor="name">Wpisz swoje imię</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Krzysztof"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                        />
                        {formik.touched.name && formik.errors.name ? (
                            <div>{formik.errors.name}</div>
                        ) : null}

                        <label htmlFor="email">Wpisz swój email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="abc@xyz.pl"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div>{formik.errors.email}</div>
                        ) : null}

                        <label htmlFor="message">Wpisz swoją wiadomość</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.message}
                        />
                        {formik.touched.message && formik.errors.message ? (
                            <div>{formik.errors.message}</div>
                        ) : null}
                        <button type="submit">Submit</button>
                    </form>

                </div>
            </div>
        </footer>
    );
};

export default FooterFormik;