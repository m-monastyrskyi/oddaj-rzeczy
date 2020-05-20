import React from 'react';
import './scss/main.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./components/Home";
import OddajRzeczy from "./components/OddajRzeczy";
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";
import NotFound from "./components/NotFound";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/oddaj-rzeczy/" component={OddajRzeczy}/>
                <Route path="/logowanie/" component={Login}/>
                <Route path="/rejestracja/" component={Register}/>
                <Route path="/wylogowano/" component={Logout}/>
                <Route path="*" component={NotFound}/>
            </Switch>
        </Router>
    );
}

export default App;
