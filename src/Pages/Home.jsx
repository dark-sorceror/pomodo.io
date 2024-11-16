import React from 'react';

import { Pomodoro } from '../components/Pomodoro';
import { ThemeToggle } from '../components/ThemeToggle/ThemeToggle';

import { useTheme } from '../context/Theme';

import './Home.css';

const Home = () => {
    const { themeMode } = useTheme();

    return (
        <div className={`wrapper ${themeMode == 'dark' ? 'dark-mode' : ''}`}>
            <div className="background"></div>
            <div className="background background-dark"></div>
            <nav>
                <div className="nav">
                    <div className="logo"></div>
                </div>
            </nav>
            <main className="container">
                <Pomodoro />
            </main>
            <footer className="footer">
                <ThemeToggle />
            </footer>
        </div>
    );
};

export default Home;

/*
const ZenModeToggle = ({themeMode}) => (
    
    <div className="toggle toggle-zen-mode"
        style={{
            backgroundColor: themeMode ? 'rgb(241, 184, 255)' : 'rgb(190,224,182)',
        }}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-swords"
        >
            <polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5" />
            <line x1="13" x2="19" y1="19" y2="13" />
            <line x1="16" x2="20" y1="16" y2="20" />
            <line x1="19" x2="21" y1="21" y2="19" />
            <polyline points="14.5 6.5 18 3 21 3 21 6 17.5 9.5" />
            <line x1="5" x2="9" y1="14" y2="18" />
            <line x1="7" x2="4" y1="17" y2="20" />
            <line x1="3" x2="5" y1="19" y2="21" />
        </svg>
        <label className="switch">
            <input type="" id="toggle-zen-mode" />
            <span className="slider"></span>
        </label>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-crosshair"
        >
            <circle cx="12" cy="12" r="10" />
            <line x1="22" x2="18" y1="12" y2="12" />
            <line x1="6" x2="2" y1="12" y2="12" />
            <line x1="12" x2="12" y1="6" y2="2" />
            <line x1="12" x2="12" y1="22" y2="18" />
        </svg>
    </div>
);
*/