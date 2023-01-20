import React, { useState } from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
    email: '',
    role: '',
    id: '',
    onLogout: () => {},
    onLogin: (email,role,id) => {}
});


export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [email, setEmail] = useState('');
    const [id, setId] = useState(0);
    const [role, setRole] = useState('');

    const logoutHandler = () => {
        setIsLoggedIn(false);
        setEmail('');
        setRole('');
        setId(0);
        console.log("Logged out!")
    }

    const loginHandler = (theEmail, theRole, theId) => {
        setIsLoggedIn(true);
        setEmail(theEmail);
        setRole(theRole);
        setId(theId);
    }

    return (<AuthContext.Provider value={{
        isLoggedIn: isLoggedIn, 
        email: email,
        role: role,
        id: id,
        onLogout: logoutHandler,
        onLogin: loginHandler
        }}>
        {props.children}
    </AuthContext.Provider>)
}

export default AuthContext;