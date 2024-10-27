import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

createRoot(document.getElementById('root')).render(<App />);

function toggleLDMode() {
    var wrapper = document.getElementById('wrapper');
    var toggleLDM = document.getElementById('toggle-ld-mode');

    toggleLDM.onchange = function() {
        wrapper.classList.toggle('dm');
    }
}

window.onload = function () {
    toggleLDMode();
};