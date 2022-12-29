import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AuthContext, { AuthContextProvider } from './context/auth-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthContextProvider>
    <React.StrictMode>
        <BrowserRouter>
        {/* <AuthContext.Provider> */}
            <App/>
        {/* </AuthContext.Provider> */}
        </BrowserRouter>
    </React.StrictMode>
    </AuthContextProvider>
);
