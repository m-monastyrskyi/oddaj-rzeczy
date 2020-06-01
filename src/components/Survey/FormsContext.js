import React, {useState, createContext} from "react";

export const FormContext = createContext();

export const FormProvider = (props) => {
    const data = {
        clothesOk: false,
        clothesNotOk: false,
        toys: false,
        books: false,
        other: false,
        bags: "--wybierz--",
        localization: "--wybierz--",
        whomToHelp: false,
        customOrganization: "",
        street: "",
        city: "",
        zipCode: "",
        phoneNumber: "",
        date: "",
        time: "",
        notesForTheCourier: ""
    }
    const [formsData, setFormsData] = useState(data);

    return (
        <FormContext.Provider value={[formsData, setFormsData]}>
            {
                props.children
            }
        </FormContext.Provider>
    )
}