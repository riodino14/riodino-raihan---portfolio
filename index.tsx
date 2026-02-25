import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx'; // Added .tsx extension
import { ThemeProvider } from './contexts/ThemeContext.tsx'; // Import ThemeProvider

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// Use a global variable to store the root to avoid "container already passed to createRoot" error
const globalAny: any = window;
let root = globalAny._reactRoot;

if (!root) {
  root = ReactDOM.createRoot(rootElement);
  globalAny._reactRoot = root;
}

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);