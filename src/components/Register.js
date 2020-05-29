import React from 'react';
import TopMenu from "./TopMenu";
import AuthForm from "./AuthForm";
import {FirebaseContext} from './Firebase';


const Register = () => {
    return (
        <>
            <TopMenu/>
            <FirebaseContext.Consumer>
                {firebase => <AuthForm register={true} firebase={firebase}/>}
            </FirebaseContext.Consumer>

        </>
    );
};

export default Register;