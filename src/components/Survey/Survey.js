import React from 'react';
import TopMenu from "../TopMenu";
import FooterForm from "../FooterForm";
import SurveyHeader from "./SurveyHeader";
import SurveyForm from "./SurveyForm";

const Survey = () => {
    return (
        <>
            <TopMenu/>
            <SurveyHeader/>
            <SurveyForm/>
            <FooterForm/>
        </>
    );
};

export default Survey;