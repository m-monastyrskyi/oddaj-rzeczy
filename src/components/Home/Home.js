import React from 'react';
import Header from "./Header";
import TopMenu from "../TopMenu";
import ThreeColumns from "./ThreeColumns";
import SimpleSteps from "./SimpleSteps";
//import FooterFormik from "./FooterFormik";
import FooterForm from "./FooterForm";
import WhoWeHelp from "./WhoWeHelp";
import AboutUs from "./AboutUs";

const Home = () => {
    return (
        <>
            <TopMenu/>
            <Header/>
            <ThreeColumns/>
            <SimpleSteps/>
            <AboutUs />
            <WhoWeHelp />
            <FooterForm />
        </>
    );
};

export default Home;