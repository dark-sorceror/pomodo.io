import React from 'react';
import Pomodoro from '../components/Pomodoro';
import { useTheme } from '../components/ThemeMode'

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

const LightDarkModeToggle = ({ onToggle, themeMode }) => (
    <div className="toggle toggle-ld-mode"
    style={{
        backgroundColor: themeMode ? 'rgb(241, 184, 255)' : 'rgb(190,224,182)',
    }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="dm-btn-sun"
            id="dm-btn-sun">
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
            <input type="checkbox" id="toggle-ld-mode" onChange={onToggle} checked={themeMode} />
            <span className="slider"></span>
        </label>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="dm-btn-moon"
            id="dm-btn-moon">
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
    </div>
);

const Home = () => {
    const { themeMode, toggleMode } = useTheme();

    return (
        <div className={`wrapper ${themeMode ? 'dark-mode' : ''}`}>
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
                <ZenModeToggle themeMode={themeMode} />
                <LightDarkModeToggle onToggle={toggleMode} themeMode={themeMode} />
            </footer>
        </div>
    );
};

export default Home;