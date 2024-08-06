
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Home from './pages/home'
import InfoImovel from './pages/imovel';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <InfoImovel/>
    <Home/>
  </React.StrictMode>
);



