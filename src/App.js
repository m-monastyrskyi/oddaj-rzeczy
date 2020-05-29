import React, {useContext, useEffect} from 'react';
import './scss/main.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";
import NotFound from "./components/NotFound";
import Survey from "./components/Survey";
import * as ROUTES from './constants/routes';
import {GlobalContext} from "./components/GlobalContext";

function App({firebase}) {
    const [, setUser, , setFirebaseFromGlobal] = useContext(GlobalContext);

    useEffect(() => {
        setFirebaseFromGlobal(firebase);
        firebase.auth.onAuthStateChanged(authUser => {
            authUser
                ? setUser(authUser)
                : setUser(null);
        });
    }, [])

    return (
        <Router>
            <Switch>
                <Route exact path={ROUTES.LANDING} component={Home}/>
                <Route exact path={ROUTES.ACCOUNT} component={Survey}/>
                <Route exact path={ROUTES.SIGN_IN} component={Login}/>
                <Route exact path={ROUTES.SIGN_UP} component={Register}/>
                <Route exact path={ROUTES.SIGN_OUT} component={Logout}/>
                <Route path="*" component={NotFound}/>
            </Switch>
        </Router>
    );
}

export default App;
