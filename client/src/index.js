import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes/Routes';




ReactDOM.render(
  <React.StrictMode>   
        <Routes/>  
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();