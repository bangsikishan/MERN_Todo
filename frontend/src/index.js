import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import TodoContextProvider from './context/TodoContext';
import UserContextProvider from './context/UserContext';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserContextProvider>
    <TodoContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </TodoContextProvider>
  </UserContextProvider>
);
