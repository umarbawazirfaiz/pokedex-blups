import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Pokedex from './containers/Pokedex';
import Pokemon from './containers/Pokemon';

const history = createBrowserHistory();

ReactDOM.render(
  <BrowserRouter history={history}>
    <Routes>
        <Route path='/' element={<Pokedex />} />
        <Route path='/pokemon/:name' element={<Pokemon />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('app')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
