import React from 'react';
import TopMenu from "./TopMenu";
import AuthForm from "./AuthForm";

const Login = () => {
    return (
           <>
               <TopMenu />
               <AuthForm register={false}/>
           </>
    );
};

export default Login;