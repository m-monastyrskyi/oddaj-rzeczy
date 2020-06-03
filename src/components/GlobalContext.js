import React, {useState, createContext} from "react";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
    const [user, setUser] = useState(null);
    const [firebaseFromGlobal, setFirebaseFromGlobal] = useState(null);

    return (
        <GlobalContext.Provider value={[user, setUser, firebaseFromGlobal, setFirebaseFromGlobal]}>
            {
                props.children
            }
        </GlobalContext.Provider>
    )
}