import React from 'react';

const Form3 = () => {
    return (
        <>
            <h3>Krok 3/4</h3>
            <br/>

            <label>Lokalizacja:</label>

            <select name="localization">
                <option value="--wybierz--">--wybierz--</option>
                <option value="Poznań">Poznań</option>
                <option value="Warszawa">Warszawa</option>
                <option value="Kraków">Kraków</option>
                <option value="Wrocław">Wrocław</option>
                <option value="Katowice">Katowice</option>
            </select>
            <br/><br/>
            <label>Komu chcesz pomóc?</label>
            <br/><br/>
            <div>
                <input type="radio" id="dzieciom"
                       name="contact" value="dzieciom"/>
                <label htmlFor="dzieciom">Dzieciom</label>

                <input type="radio" id="matkom"
                       name="contact" value="phone"/>
                <label htmlFor="matkom">Samotnim matkom</label>

                <input type="radio" id="bezdomnym"
                       name="contact" value="bezdomnym"/>
                <label htmlFor="bezdomnym">Bezdomnym</label>
                <br/><br/>
                <input type="radio" id="niepelnosprawnym"
                       name="contact" value="niepelnosprawnym"/>
                <label htmlFor="niepelnosprawnym">Niepełnosprawnym</label>

                <input type="radio" id="starszym"
                       name="contact" value="starszym"/>
                <label htmlFor="starszym">Osobom starszym</label>
            </div>
            <br/><br/>
            <label htmlFor="org">Wpisz nazwę konkretnej organizacji (opcjonalnie)</label>
            <br/><br/>
            <input type="text" name="org" id="org"/>
            <br/><br/>
        </>
    );
};

export default Form3;