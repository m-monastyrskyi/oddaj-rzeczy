import React, {useContext, useEffect} from 'react';
import './scss/main.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";
import NotFound from "./components/NotFound";
import Survey from "./components/Survey";
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
                <Route exact path="/" component={Home}/>
                <Route exact path="/oddaj-rzeczy" component={Survey}/>
                <Route exact path="/logowanie" component={Login}/>
                <Route exact path="/rejestracja" component={Register}/>
                <Route exact path="/wylogowano" component={Logout}/>
                <Route path="*" component={NotFound}/>
            </Switch>
        </Router>
    );
}

export default App;
