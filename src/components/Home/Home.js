import React from 'react';
import Header from "./Header";
import TopMenu from "../TopMenu";
import ThreeColumns from "./ThreeColumns";
import SimpleSteps from "./SimpleSteps";
//import FooterFormik from "./FooterFormik";
import FooterForm from "../FooterForm";
import WhoWeHelp from "./WhoWeHelp";
import AboutUs from "./AboutUs";
import {FirebaseContext} from "../Firebase";

const Home = () => {
    return (
        <>
            <FirebaseContext.Consumer>
                {firebase => <TopMenu firebase={firebase}/>}
            </FirebaseContext.Consumer>

            <Header/>
            <ThreeColumns/>
            <SimpleSteps/>
            <AboutUs/>
            <WhoWeHelp/>
            <FooterForm/>
        </>
    );
};

export default Home;