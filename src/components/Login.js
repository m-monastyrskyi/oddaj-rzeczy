import React, {useContext} from 'react';
import TopMenu from "./TopMenu";
import AuthForm from "./AuthForm";
import {FirebaseContext} from "./Firebase";
import {GlobalContext} from "./GlobalContext";


const Login = () => {
    const [user] = useContext(GlobalContext);

    return (
        <>
            <TopMenu/>
            {
                user ? <h1>"Zalogowano już"</h1> : <FirebaseContext.Consumer>
                    {firebase => <AuthForm register={false} firebase={firebase}/>}
                </FirebaseContext.Consumer>
            }
        </>
    );
};

export default Login;