import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter} from 'react-router-dom'
import App from './App/App';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import './css/App.css'
import '../node_modules/sweetalert/dist/sweetalert.min.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='container'>
    <>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </>
  </div>
);

