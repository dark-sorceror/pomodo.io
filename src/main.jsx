import React from 'react';
import { createRoot } from 'react-dom/client';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import App from './App.jsx';

const root = document.getElementById('root');

createRoot(root).render(
    <React.StrictMode>
        <DndProvider backend={HTML5Backend}>
            <App />
        </DndProvider>
    </React.StrictMode>,
)
