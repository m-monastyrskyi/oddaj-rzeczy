import React, {useContext} from 'react';
import TopMenu from "../TopMenu";
import FooterForm from "../FooterForm";
import SurveyHeader from "./SurveyHeader";
import SurveyForm from "./SurveyForm";
import {GlobalContext} from "../GlobalContext";
import {Redirect} from "react-router-dom";


const Survey = () => {
    const [user] = useContext(GlobalContext);

    if (!user) {
        return (
            <Redirect to='/logowanie/'/>
        )
    } else {
        return <>
            <TopMenu/>
            <SurveyHeader/>
            <SurveyForm/>
            <FooterForm/>
        </>
    }
};

export default Survey;