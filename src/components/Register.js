import React from 'react';
import TopMenu from "./TopMenu";
import AuthForm from "./AuthForm";

const Register = () => {
    return (
        <>
            <TopMenu />
            <AuthForm register={true}/>
        </>
    );
};

export default Register;