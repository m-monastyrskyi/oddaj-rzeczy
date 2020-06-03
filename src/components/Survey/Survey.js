import React, {useContext, useEffect} from 'react';
import TopMenu from "../TopMenu";
import FooterForm from "../FooterForm";
import SurveyHeader from "./SurveyHeader";
import SurveyForm from "./SurveyForm";
import {GlobalContext} from "../GlobalContext";
import {Redirect} from "react-router-dom";
import { animateScroll as scroll, scroller } from 'react-scroll'
import {FormProvider} from "./FormsContext";


const Survey = () => {
    const [user] = useContext(GlobalContext);

    useEffect(() => {
        scroll.scrollTo(0);
        // scroller.scrollTo('survey-form', {
        //     duration: 800,
        //     delay: 0,
        //     smooth: 'easeInOutQuart'
        // });
    }, [])

    if (!user) {
        return (
            <Redirect to='/logowanie/'/>
        )
    } else {
        return <>
            <TopMenu/>
            <SurveyHeader/>
            <FormProvider>
                <SurveyForm/>
            </FormProvider>
            <FooterForm/>
        </>
    }
};

export default Survey;