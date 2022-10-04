import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './Global.css';
import ExpensesContextProvider from './context/Store';
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <ExpensesContextProvider>
      <App />
    </ExpensesContextProvider>
  </React.StrictMode>
);

