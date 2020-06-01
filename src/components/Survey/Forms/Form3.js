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
            <h3>Krok 3/4</h3>
            <br/>

            <label>Lokalizacja:</label>

            <select name="localization" value={formsData.localization} onChange={handleChange}>
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
                <input type="radio" id="dzieciom" name="whomToHelp" value="Dzieciom"
                       checked={formsData.whomToHelp === "Dzieciom"}
                       onChange={handleChange}
                />
                <label htmlFor="dzieciom">Dzieciom</label>

                <input type="radio" id="matkom" name="whomToHelp" value="Samotnim matkom"
                       checked={formsData.whomToHelp === "Samotnim matkom"}
                       onChange={handleChange}
                />
                <label htmlFor="matkom">Samotnim matkom</label>

                <input type="radio" id="bezdomnym" name="whomToHelp" value="Bezdomnym"
                       checked={formsData.whomToHelp === "Bezdomnym"}
                       onChange={handleChange}
                />
                <label htmlFor="bezdomnym">Bezdomnym</label>
                <br/><br/>
                <input type="radio" id="niepelnosprawnym" name="whomToHelp" value="Niepełnosprawnym"
                       checked={formsData.whomToHelp === "Niepełnosprawnym"}
                       onChange={handleChange}
                />
                <label htmlFor="niepelnosprawnym">Niepełnosprawnym</label>

                <input type="radio" id="starszym" name="whomToHelp" value="Osobom starszym"
                       checked={formsData.whomToHelp === "Osobom starszym"}
                       onChange={handleChange}
                />
                <label htmlFor="starszym">Osobom starszym</label>
            </div>
            <br/><br/>
            <label htmlFor="org">Wpisz nazwę konkretnej organizacji (opcjonalnie)</label>
            <br/><br/>
            <input type="text" id="org" name="customOrganization" value={formsData.customOrganization}
                   onChange={handleChange}/>
            <br/><br/>
        </>
    );
};

export default Form3;