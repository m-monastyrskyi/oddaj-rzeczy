import React, {useContext} from 'react';
import {FormContext} from "../FormsContext";

const Form1 = () => {
    const [formsData, setFormsData] = useContext(FormContext);

    const handleChange = (e) => {
        const isChecked = e.target.checked;
        const name = e.target.name;
        setFormsData(prev => {
                return {
                    ...prev,
                    [name]: isChecked
                }
            }
        )
    }

    return (
        <>
            <h3>Krok 1/4</h3>
            <br/>
            <h2>Zaznacz co chcesz oddać:</h2>
            <br/><br/>

            <input type="checkbox" id="clothesOk" checked={formsData.clothesOk} name="clothesOk"
                   onChange={handleChange}/>
            <label htmlFor="clothesOk">ubrania, które nadają się do ponownego użycia</label><br/><br/>

            <input type="checkbox" id="clothesNotOk" name="clothesNotOk" checked={formsData.clothesNotOk}
                   onChange={handleChange}/>
            <label htmlFor="clothesNotOk">ubrania, do wyrzucenia</label><br/><br/>

            <input type="checkbox" id="toys" name="toys" checked={formsData.toys} onChange={handleChange}/>
            <label htmlFor="toys">zabawki</label><br/><br/>

            <input type="checkbox" id="books" name="books" checked={formsData.books} onChange={handleChange}/>
            <label htmlFor="books">książki</label><br/><br/>

            <input type="checkbox" id="other" name="other" checked={formsData.other} onChange={handleChange}/>
            <label htmlFor="other">Inne</label><br/><br/>
        </>
    );
};

export default Form1;