import React, {createContext, useReducer} from 'react';
import authInitialState from './initialstate/authInitialState';
import contactsInitialState from './initialstate/contactsInitialState';
import auth from './reducers/auth';
import contact from './reducers/contacts';

const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
    const [authState, authDispatch] = useReducer(auth, authInitialState);
    const [contactsState,contactsDispatch] = useReducer(contact, contactsInitialState);
    return (
        <GlobalContext.Provider value={{
            authState, authDispatch,
            contactsState, contactsDispatch
        }}>
            {children}
        </GlobalContext.Provider>

    );
};