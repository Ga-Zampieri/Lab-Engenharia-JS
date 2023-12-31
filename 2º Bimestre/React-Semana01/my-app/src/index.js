import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Relogio from './Atividade01/Relogio';
import Letreiro from './Atividade01/Letreiro';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Relogio />
    <Letreiro />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
