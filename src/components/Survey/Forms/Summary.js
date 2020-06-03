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
            <h2 className="step-title">Podsumowanie Twojej darowizny</h2>
            <h3 className="step-subtitle">Oddajesz:</h3>
            <p className="summary-things">worków: {bags + "; "}
                {clothesOk && "ubrania, które nadają się do ponownego użycia; "}
                {clothesNotOk && "ubrania, do wyrzucenia; "}
                {toys && "zabawki; "}
                {books && "książki; "}
                {other && "inne; "}
                {whomToHelp && whomToHelp + "; "}
                {customOrganization && `dla organizacji: ${customOrganization}`}
            </p>
            <p className="summary-localization"><strong>dla lokalizacji:</strong> {localization}</p>
            <div className="summary-contact">
                <div className="summary-address">
                    <h3 className="step-subtitle">Adres odbioru:</h3>
                    <p><strong>ulica:</strong> {street}</p>
                    <p><strong>Miasto:</strong> {city}</p>
                    <p><strong>Kod pocztowy:</strong> {zipCode}</p>
                    <p><strong>Numer telefonu:</strong> {phoneNumber}</p>
                </div>
                <div className="summary-date">
                    <h3 className="step-subtitle">Termin odbioru:</h3>
                    <p><strong>Data:</strong> {date}</p>
                    <p><strong>Godzina:</strong> {time}</p>
                    {notesForTheCourier && <p><strong>Uwagi dla kuriera:</strong> {notesForTheCourier}</p>}
                </div>
            </div>
        </>
    );
};

export default Summary;