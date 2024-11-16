import React from 'react';

import Home from './pages/Home';

import { ThemeProvider } from './context/Theme';

import './App.css';

function App() {
    return (
        <ThemeProvider>
            <Home />
        </ThemeProvider>
    )
}

export default App
