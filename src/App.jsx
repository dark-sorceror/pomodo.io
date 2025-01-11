import React from 'react';

import { Home } from './pages/Home';
import { ThemeProvider } from './context/Theme';
import './styles/App.css';
import Login from './pages/login';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {

    const AuthDiscord = () => {
        // You can show a loading spinner here or just redirect to another page
        // React.useEffect(() => {
        //   window.location.href = "/"; // Redirect to home or login after OAuth
        // }, []);
        return <div>Redirecting...</div>;
      };

    return (
        <ThemeProvider>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/auth/discord" element={<AuthDiscord />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;