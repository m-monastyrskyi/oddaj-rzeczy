import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import Firebase, {FirebaseContext} from "./components/Firebase";
import {GlobalProvider} from "./components/GlobalContext";

ReactDOM.render(
    <React.StrictMode>
        <FirebaseContext.Provider value={new Firebase()}>
            <GlobalProvider>
                <FirebaseContext.Consumer>
                    {firebase => <App firebase={firebase}/>}
                </FirebaseContext.Consumer>
            </GlobalProvider>
        </FirebaseContext.Provider>
    </React.StrictMode>
    ,
    document.getElementById('root')
);