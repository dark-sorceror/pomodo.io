import React from "react";

import { useTheme } from "../../context/Theme";

import './ThemeToggle.css';

function ThemeToggle() {
    const { themeMode, toggleTheme } = useTheme();

    return (
        <div className="toggle toggle-ld-mode">
            <svg 
                className="dm-btn-sun"
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24"
            >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.93 4.93 1.41 1.41" />
                <path d="m17.66 17.66 1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m6.34 17.66-1.41 1.41" />
                <path d="m19.07 4.93-1.41 1.41" />
            </svg>
            <label className="switch">
                <input 
                    type="checkbox" 
                    id="toggle-ld-mode" 
                    onChange={ toggleTheme } 
                    checked={ themeMode === 'dark' } 
                />
                <span className="slider"></span>
            </label>
            <svg 
                className="dm-btn-moon"
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24"
            >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </svg>
        </div>
    );
}

export { ThemeToggle };