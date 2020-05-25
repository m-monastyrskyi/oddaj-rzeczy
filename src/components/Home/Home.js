import React from 'react';
import Header from "./Header";
import TopMenu from "../TopMenu";
import ThreeColumns from "./ThreeColumns";
import SimpleSteps from "./SimpleSteps";
//import FooterFormik from "./FooterFormik";
import FooterForm from "./FooterForm";

const Home = () => {
    return (
        <>
            <TopMenu/>
            <Header/>
            <ThreeColumns/>
            <SimpleSteps/>
            <FooterForm />
        </>
    );
};

export default Home;