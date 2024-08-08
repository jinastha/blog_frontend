import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from '../contexts/AuthContext';
import Navigation from './Navigation';
import Routes from './Routes';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Navigation />
                <Routes />
            </Router>
        </AuthProvider>
    );
};

export default App;