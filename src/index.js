import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
const modalRoot = ReactDOM.createRoot(document.getElementById('modal-root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


