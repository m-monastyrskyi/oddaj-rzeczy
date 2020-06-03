import React, {useContext} from 'react';
import TopMenu from "./TopMenu";
import AuthForm from "./AuthForm";
import {FirebaseContext} from "./Firebase";
import {GlobalContext} from "./GlobalContext";
import {Redirect} from "react-router-dom";


const Login = () => {
    const [user] = useContext(GlobalContext);

    return (
        <>
            <TopMenu/>
            {
                user ? <Redirect to='/' /> : <FirebaseContext.Consumer>
                    {firebase => <AuthForm register={false} firebase={firebase}/>}
                </FirebaseContext.Consumer>
            }
        </>
    );
};

export default Login;