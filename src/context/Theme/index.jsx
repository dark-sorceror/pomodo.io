import React, { createContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [ themeMode, setThemeMode ] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        localStorage.setItem('theme', themeMode);
    }, [ themeMode ]);

    const toggleTheme = () => setThemeMode((prev) => (prev === 'light' ? 'dark' : 'light'));

    return (
        <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
            { children }
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = React.useContext(ThemeContext);
    if (!context) throw new Error('useTheme must be within ThemeProvider');
    
    return context;
};