import React, {useContext} from 'react';
import TopMenu from "./TopMenu";
import AuthForm from "./AuthForm";
import {FirebaseContext} from './Firebase';
import {GlobalContext} from "./GlobalContext";


const Register = () => {
    const [user] = useContext(GlobalContext);

    return (
        <>
            <TopMenu/>
            {
                user ? <h1>"Zalogowano już"</h1> : <FirebaseContext.Consumer>
                    {firebase => <AuthForm register={true} firebase={firebase}/>}
                </FirebaseContext.Consumer>
            }
        </>
    );
};

export default Register;