import React from 'react';

import Home from './Pages/Home';

import { ThemeProvider } from './context/Theme';

import './styles/App.css';

function App() {
    return (
        <ThemeProvider>
            <Home />
        </ThemeProvider>
    );
}

export default App;