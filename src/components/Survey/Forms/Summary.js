import React, {useContext} from 'react';
import {FormContext} from "../FormsContext";

const Summary = () => {
    const [formsData] = useContext(FormContext);
    const {
        clothesOk,
        clothesNotOk,
        toys,
        books,
        other,
        bags,
        localization,
        whomToHelp,
        customOrganization,
        street,
        city,
        zipCode,
        phoneNumber,
        date,
        time,
        notesForTheCourier
    } = formsData;


    return (
        <>
            <h2>Podsumowanie Twojej darowizny</h2>
            <h3>Oddajesz:</h3>
            <p>worków: {bags},
                {clothesOk && "ubrania, które nadają się do ponownego użycia"},
                {clothesNotOk && "ubrania, do wyrzucenia"},
                {toys && "zabawki"},
                {books && "książki"},
                {other && "inne"},
                {whomToHelp && whomToHelp},
                {customOrganization && `dla organizacji: ${customOrganization}`}
            </p>
            <p>dla lokalizacji: {localization}</p>
            <p>Adres odbioru:</p>
            <p>ulica: {street}</p>
            <p>Miasto: {city}</p>
            <p>Kod pocztowy: {zipCode}</p>
            <p>Numer telefonu: {phoneNumber}</p>
            <p>Data: {date}</p>
            <p>Godzina: {time}</p>
            {notesForTheCourier && <p>Uwagi dla kuriera: {notesForTheCourier}</p>}
        </>
    );
};

export default Summary;