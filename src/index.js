import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import Ppal from './Ppal';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';

const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(
      <Provider store={store}>
         <Ppal />
      </Provider>
      );
