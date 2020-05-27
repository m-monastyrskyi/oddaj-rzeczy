const validate = (name, email, message) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const errors = {};
    if (!name) {
        errors.name = 'Wymagane';
    } else if (name.indexOf(" ") >= 0) {
        errors.name = 'Podane imię jest nieprawidłowe!';
    }

    if (!email) {
        errors.email = 'Wymagane';
    } else if (!re.test(String(email).toLowerCase())) {
        errors.email = 'Podany email jest nieprawidłowy';
    }

    if (!message) {
        errors.message = 'Wymagane';
    } else if (message.length < 120) {
        errors.message = 'Wiadomość musi mieć conajmniej 120 znaków!';
    }
    if (!errors.name && !errors.email && !errors.message) {
        errors.ok = true;
    }
    return errors;
}

const validateAuth = (email, password, repeatPassword) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const errors = {};

    if (!email) {
        errors.email = 'Wymagane';
    } else if (!re.test(String(email).toLowerCase())) {
        errors.email = 'Podany email jest nieprawidłowy';
    }

    if (!password) {
        errors.password = 'Wymagane';
    } else if (password.length < 6) {
        errors.password = 'Hasło musi mieć conajmniej 6 znaków!';
    }

    if ((typeof repeatPassword === "string") && (password !== repeatPassword)) {
        errors.repeatPassword = 'Hasła się różnią!';
    }

    if (!errors.email && !errors.password && !errors.repeatPassword) {
        errors.ok = true;
    }
    return errors;
}


export {
    validate,
    validateAuth
}