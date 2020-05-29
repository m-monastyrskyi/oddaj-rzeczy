import React from 'react';

const Form2 = () => {
    return (
        <>
            <h3>Krok 2/4</h3>
            <br/>
            <h2>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h2>
            <br/><br/>

            <label htmlFor="stuff1">Liczba 60l worków:</label>

            <select name="bags">
                <option value="--wybierz--">--wybierz--</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <br/><br/>
        </>
    );
};

export default Form2;