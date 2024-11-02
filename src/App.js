import React from 'react';
import Home from './Pages/Home';
import { ThemeMode } from './components/ThemeMode';

import './styles/App.css'

function App() {
    return (
        <ThemeMode>
            <Home />
        </ThemeMode>
    );
}

export default App;