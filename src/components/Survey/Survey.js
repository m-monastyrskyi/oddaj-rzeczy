import React from 'react';
import TopMenu from "../TopMenu";
import FooterForm from "../FooterForm";
import SurveyHeader from "./SurveyHeader";
import SurveyForm from "./SurveyForm";
import {FirebaseContext} from '../Firebase';


const Survey = () => {
    return (
        <FirebaseContext.Consumer>
            {() => {
                return <>
                    <h1 style={{fontSize: "100px"}}>From Firebase Context Consumer</h1>
                    <TopMenu/>
                    <SurveyHeader/>
                    <SurveyForm/>
                    <FooterForm/>
                </>;
            }}
        </FirebaseContext.Consumer>

    );
};

export default Survey;