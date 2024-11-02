import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeMode = ({ children }) => {
    const [ themeMode, setThemeMode ] = useState(false);

    const toggleMode = () => {
        setThemeMode((prev) => !prev);
    };

    return (
        <ThemeContext.Provider value={{ themeMode, toggleMode }}>
            { children }
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);