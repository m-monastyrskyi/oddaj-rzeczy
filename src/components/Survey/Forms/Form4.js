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
            <h3>Krok 4/4</h3>
            <br/>
            <h2>Podaj adres oraz termin odbioru rzecz przez kuriera</h2>

            <br/><br/>
            <h3>Adres odbioru:</h3>

            <label htmlFor="street">Ulica</label>
            <br/><br/>
            <input type="text" id="street" name="street" value={formsData.street}
                   onChange={handleChange}/>
            <br/><br/>

            <label htmlFor="city">Miasto</label>
            <br/><br/>
            <input type="text" id="city" name="city" value={formsData.city}
                   onChange={handleChange}/>
            <br/><br/>

            <label htmlFor="zipCode">Kod pocztowy</label>
            <br/><br/>
            <input type="text" id="zipCode" name="zipCode" value={formsData.zipCode} pattern="^[0-9]{2}-[0-9]{3}$"
                   onChange={handleChange}/>
            <br/><br/>

            <label htmlFor="phoneNumber">Numer telefonu</label>
            <br/><br/>
            <input type="text" id="phoneNumber" name="phoneNumber" value={formsData.phoneNumber} pattern="^([0-9]{9})$"
                   onChange={handleChange}/>
            <br/><br/>

            <br/><br/>
            <h3>Termin odbioru:</h3>

            <label htmlFor="date">Data</label>
            <br/><br/>
            <input type="date" id="date" name="date" value={formsData.data}
                   onChange={handleChange}/>
            <br/><br/>

            <label htmlFor="time">Godzina</label>
            <br/><br/>
            <input type="text" id="time" name="time" value={formsData.time} pattern="^([01]?[0-9]|2[0-3]):[0-5][0-9]$"
            onChange={handleChange}/>
            <br/><br/>

            <label htmlFor="notes">Uwagi dla kuriera</label>
            <br/><br/>
            <textarea rows="5" id="notes" name="notesForTheCourier" value={formsData.notesForTheCourier}
            onChange={handleChange}/>
            <br/><br/>
        </>
    );
};

export default Form4;