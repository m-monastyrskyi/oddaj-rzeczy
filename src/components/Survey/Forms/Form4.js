import React from 'react';

const Form4 = () => {
    return (
        <>
            <h3>Krok 4/4</h3>
            <br/>
            <h2>Podaj adres oraz termin odbioru rzecz przez kuriera</h2>

            <br/><br/>
            <h3>Adres odbioru:</h3>

            <label htmlFor="street">Ulica</label>
            <br/><br/>
            <input type="text" name="street" id="street"/>
            <br/><br/>

            <label htmlFor="city">Miasto</label>
            <br/><br/>
            <input type="text" name="city" id="city"/>
            <br/><br/>

            <label htmlFor="zip-code">Kod pocztowy</label>
            <br/><br/>
            <input type="text" name="zip-code" id="zip-code"/>
            <br/><br/>

            <label htmlFor="phone">Numer telefonu</label>
            <br/><br/>
            <input type="text" name="phone" id="phone"/>
            <br/><br/>

            <br/><br/>
            <h3>Termin odbioru:</h3>

            <label htmlFor="date">Data</label>
            <br/><br/>
            <input type="date" name="date" id="date"/>
            <br/><br/>

            <label htmlFor="hour">Godzina</label>
            <br/><br/>
            <input type="text" name="hour" id="hour"/>
            <br/><br/>

            <label htmlFor="notes">Uwagi dla kuriera</label>
            <br/><br/>
            <textarea rows="5" name="note" id="notes"/>
            <br/><br/>
        </>
    );
};

export default Form4;