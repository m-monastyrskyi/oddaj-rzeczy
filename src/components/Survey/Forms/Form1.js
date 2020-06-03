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
            <h3 className="step-number">Krok 1/4</h3>

            <h2 className="step-title">Zaznacz co chcesz oddać:</h2>

            <label className="checkbox-container">ubrania, które nadają się do ponownego użycia
                <input type="checkbox" id="clothesOk" checked={formsData.clothesOk} name="clothesOk"
                       onChange={handleChange}/>
                <span className="checkmark"/>
            </label>

            <label className="checkbox-container">ubrania, do wyrzucenia
                <input type="checkbox" id="clothesNotOk" name="clothesNotOk" checked={formsData.clothesNotOk}
                       onChange={handleChange}/>
                <span className="checkmark"/>
            </label>

            <label className="checkbox-container">zabawki
                <input type="checkbox" id="toys" name="toys" checked={formsData.toys} onChange={handleChange}/>
                <span className="checkmark"/>
            </label>

            <label className="checkbox-container">książki
                <input type="checkbox" id="books" name="books" checked={formsData.books} onChange={handleChange}/>
                <span className="checkmark"/>
            </label>

            <label className="checkbox-container">Inne
                <input type="checkbox" id="other" name="other" checked={formsData.other} onChange={handleChange}/>
                <span className="checkmark"/>
            </label>

        </>
    );
};

export default Form1;