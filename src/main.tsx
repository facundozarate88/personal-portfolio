import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const initializeApp = () => {
  const rootElement = document.getElementById('root');

  if (!rootElement) {
    console.error('Root element not found');
    return;
  }

  const app = (
    process.env.NODE_ENV === 'development' ? (
      <React.StrictMode>
        <App />
      </React.StrictMode>
    ) : (
      <App />
    )
  );

  createRoot(rootElement).render(app);
};

initializeApp();