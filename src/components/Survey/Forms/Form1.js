import React from 'react';

const Form1 = () => {
    return (
        <>
            <h3>Krok 1/4</h3>
            <br/>
            <h2>Zaznacz co chcesz oddać:</h2>
            <br/><br/>
            <input type="checkbox" id="stuff1" name="stuff1" value="stuff1"/>
            <label htmlFor="stuff1">ubrania, które nadają się do ponownego użycia</label><br/><br/>

            <input type="checkbox" id="stuff2" name="stuff2" value="stuff2"/>
            <label htmlFor="stuff2">ubrania, do wyrzucenia</label><br/><br/>

            <input type="checkbox" id="stuff3" name="stuff3" value="stuff3"/>
            <label htmlFor="stuff3">zabawki</label><br/><br/>

            <input type="checkbox" id="stuff4" name="stuff4" value="stuff4"/>
            <label htmlFor="stuff3">książki</label><br/><br/>

            <input type="checkbox" id="stuff5" name="stuff5" value="stuff5"/>
            <label htmlFor="stuff5">Inne</label><br/><br/>
        </>
    );
};

export default Form1;