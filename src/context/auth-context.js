import React, { useState } from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
    email: '',
    role: '',
    onLogout: () => {},
    onLogin: (email,role) => {}
});


export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');

    const logoutHandler = () => {
        setIsLoggedIn(false);
        setEmail('');
        setRole('');
        console.log("Logged out!")
    }

    const loginHandler = (theEmail, theRole) => {
        setIsLoggedIn(true);
        setEmail(theEmail);
        setRole(theRole);
    }

    return (<AuthContext.Provider value={{
        isLoggedIn: isLoggedIn, 
        email: email,
        role: role,
        onLogout: logoutHandler,
        onLogin: loginHandler
        }}>
        {props.children}
    </AuthContext.Provider>)
}

export default AuthContext;