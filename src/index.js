import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import {App} from './import';
import './components/Scss/index.scss';
import './components/Scss/media.scss';
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
