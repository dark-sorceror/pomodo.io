import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

createRoot(document.getElementById('root')).render(<App />);

function toggleLDMode() {
    var wrapper = document.getElementById('wrapper');
    var DMBtn = document.getElementsByClassName('ldm-btn')[0];
    var DMBtnMoon = document.getElementById('dm-btn-moon');
    var DMBtnSun = document.getElementById('dm-btn-sun');

    DMBtn.onclick = function() {
        wrapper.classList.toggle('dm')
        DMBtnMoon.classList.toggle('a');
        DMBtnSun.classList.toggle('a');
        DMBtn.id = `${DMBtnMoon.classList.contains('a') ? 'Dark\xa0Mode' : 'Light\xa0Mode'}`
    };
}

window.onload = function () {
    toggleLDMode();
};