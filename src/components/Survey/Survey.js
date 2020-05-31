import React, {useContext, useEffect} from 'react';
import TopMenu from "../TopMenu";
import FooterForm from "../FooterForm";
import SurveyHeader from "./SurveyHeader";
import SurveyForm from "./SurveyForm";
import {GlobalContext} from "../GlobalContext";
import {Redirect} from "react-router-dom";
import { animateScroll as scroll } from 'react-scroll'



const Survey = () => {
    const [user] = useContext(GlobalContext);

    useEffect(()=>{
        scroll.scrollTo(0);
    },[])

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