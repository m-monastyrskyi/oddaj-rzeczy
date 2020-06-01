export const validateForm = (page, data) => {

    const {
        clothesOk,
        clothesNotOk,
        toys,
        books,
        other,
        bags,
        localization,
        whomToHelp,
        street,
        city,
        zipCode,
        phoneNumber,
        date,
        time,
    } = data;
    const errors = [];

    switch (page) {
        case 1: {
            if (clothesOk || clothesNotOk || toys || books || other) {
                return true
            } else {
                errors.push("Zaznacz co chcesz oddać");
                return errors;
            }
        }
        case 2: {
            if (bags !== "--wybierz--") {
                return true
            } else {
                errors.push("Podaj liczbę worków");
                return errors;
            }
        }

        case 3: {
            if (localization !== "--wybierz--" && whomToHelp) {
                return true
            } else {
                localization === "--wybierz--" && errors.push("Wybierz lokalizację");
                !whomToHelp && errors.push("Zaznacz komu chcesz pomóc?");
                return errors;
            }
        }
        case 4: {

        }
            street.length < 4 && errors.push("Bład w ulicy");
            city.length < 3 && errors.push("Bład w nazwie miasta");
            !zipCode.match(/^[0-9]{2}-[0-9]{3}$/) && errors.push("Bład w kodzie pocztowym");
            !phoneNumber.match(/^([0-9]{9})$/) && errors.push("Bład w numerze telefonu");
            !date && errors.push("Wybierz datę");
            !time.match(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/) && errors.push("Wpisz godzinę w formacie hh:mm");
            if (errors.length > 0) {
                return errors;
            } else return true;
    }
}