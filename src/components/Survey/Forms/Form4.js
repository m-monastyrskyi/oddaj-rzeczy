import React, {useContext} from 'react';
import {FormContext} from "../FormsContext";

const Form4 = () => {
    const [formsData, setFormsData] = useContext(FormContext);
    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setFormsData(prev => {
                return {
                    ...prev,
                    [name]: value
                }
            }
        )
    }

    return (
        <>
            <h3 className="step-number">Krok 4/4</h3>
            <h2 className="step-title">Podaj adres oraz termin odbioru rzecz przez kuriera</h2>
            <div className="step-contact">
                <div className="step-address">
                    <h3 className="step-subtitle">Adres odbioru:</h3>
                    <div className="step-line">
                        <label htmlFor="street">Ulica</label>
                        <input type="text" id="street" name="street" value={formsData.street}
                               onChange={handleChange}/>
                    </div>
                    <div className="step-line">

                        <label htmlFor="city">Miasto</label>
                        <input type="text" id="city" name="city" value={formsData.city}
                               onChange={handleChange}/>
                    </div>
                    <div className="step-line">

                        <label htmlFor="zipCode">Kod pocztowy</label>
                        <input type="text" id="zipCode" name="zipCode" value={formsData.zipCode}
                               pattern="^[0-9]{2}-[0-9]{3}$"
                               onChange={handleChange}/>
                    </div>
                    <div className="step-line">

                        <label htmlFor="phoneNumber">Numer telefonu</label>
                        <input type="text" id="phoneNumber" name="phoneNumber" value={formsData.phoneNumber}
                               pattern="^([0-9]{9})$"
                               onChange={handleChange}/>
                    </div>
                </div>
                <div className="step-date">
                    <h3 className="step-subtitle">Termin odbioru:</h3>
                    <div className="step-line">
                        <label htmlFor="date">Data</label>
                        <input type="date" id="date" name="date" value={formsData.data}
                               onChange={handleChange}/>
                    </div>
                    <div className="step-line">
                        <label htmlFor="time">Godzina</label>
                        <input type="text" id="time" name="time" value={formsData.time}
                               pattern="^([01]?[0-9]|2[0-3]):[0-5][0-9]$"
                               onChange={handleChange}/>
                    </div>
                    <div className="step-line">
                        <label htmlFor="notes">Uwagi dla kuriera</label>
                        <textarea rows="5" id="notes" name="notesForTheCourier" value={formsData.notesForTheCourier}
                                  onChange={handleChange}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Form4;