import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import './index.scss';
import './media.scss';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
<BrowserRouter >
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
reportWebVitals();
