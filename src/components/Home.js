import React from 'react';
import Header from "./Header";
import TopMenu from "./TopMenu";
import ThreeColumns from "./ThreeColumns";
import SimpleSteps from "./SimpleSteps";

const Home = () => {
    return (
        <>
            <TopMenu />
            <Header />
            <ThreeColumns />
            <SimpleSteps />
        </>
    );
};

export default Home;