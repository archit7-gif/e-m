


import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';

// Import polyfills
import { Buffer } from 'buffer';
import process from 'process';
import util from 'util';

// Assign polyfills to window object
window.Buffer = Buffer;
window.process = process;
window.util = util;

createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
      <App />
    </BrowserRouter>
  
)
// Uncomment if you want to use reportWebVitals
// import reportWebVitals from './reportWebVitals';
// reportWebVitals();












