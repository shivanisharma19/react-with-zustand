import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

const appElement = document.getElementById('root')!
const root = createRoot(appElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
