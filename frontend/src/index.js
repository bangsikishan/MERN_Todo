import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import TodoContextProvider from './context/TodoContext';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TodoContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TodoContextProvider>
);
