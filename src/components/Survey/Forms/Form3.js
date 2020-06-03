import React, {useContext} from 'react';
import {FormContext} from "../FormsContext";


const Form3 = () => {
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
            <h3 className="step-number">Krok 3/4</h3>

            <label className="step-title">Lokalizacja:</label>
            <div>
                <select className="select-css" name="localization" value={formsData.localization}
                        onChange={handleChange}>
                    <option value="--wybierz--">--wybierz--</option>
                    <option value="Poznań">Poznań</option>
                    <option value="Warszawa">Warszawa</option>
                    <option value="Kraków">Kraków</option>
                    <option value="Wrocław">Wrocław</option>
                    <option value="Katowice">Katowice</option>
                </select>
            </div>

            <h3 className="step-subtitle">Komu chcesz pomóc?</h3>

            <div className="radio-group">
                <label className="radio-container">Dzieciom
                    <input type="radio" name="whomToHelp" value="Dzieciom"
                           checked={formsData.whomToHelp === "Dzieciom"}
                           onChange={handleChange}/>
                    <span className="checkmark"/>
                </label>

                <label className="radio-container">Samotnim matkom
                    <input type="radio" name="whomToHelp" value="Samotnim matkom"
                           checked={formsData.whomToHelp === "Samotnim matkom"}
                           onChange={handleChange}/>
                    <span className="checkmark"/>
                </label>

                <label className="radio-container">Bezdomnym
                    <input type="radio" name="whomToHelp" value="Bezdomnym"
                           checked={formsData.whomToHelp === "Bezdomnym"}
                           onChange={handleChange}/>
                    <span className="checkmark"/>
                </label>

                <label className="radio-container">Niepełnosprawnym
                    <input type="radio" name="whomToHelp" value="Niepełnosprawnym"
                           checked={formsData.whomToHelp === "Niepełnosprawnym"}
                           onChange={handleChange}/>
                    <span className="checkmark"/>
                </label>

                <label className="radio-container">Osobom starszym
                    <input type="radio" name="whomToHelp" value="Osobom starszym"
                           checked={formsData.whomToHelp === "Osobom starszym"}
                           onChange={handleChange}/>
                    <span className="checkmark"/>
                </label>

            </div>
            <label className="step-subtitle" htmlFor="org">Wpisz nazwę konkretnej organizacji (opcjonalnie)</label>
            <br/>
            <input className="form-inputs__input" type="text" id="org" name="customOrganization"
                   value={formsData.customOrganization}
                   onChange={handleChange}/>
        </>
    );
};

export default Form3;