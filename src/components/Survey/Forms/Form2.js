import React, {useContext} from 'react';
import {FormContext} from "../FormsContext";

const Form2 = () => {
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
            <h3 className="step-number">Krok 2/4</h3>
            <h2 className="step-title">Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h2>
            <div>
                <label htmlFor="bags">Liczba 60l worków:</label>

                <select className="select-css" name="bags" value={formsData.bags} onChange={handleChange}>
                    <option value="--wybierz--">--wybierz--</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
        </>
    );
};

export default Form2;