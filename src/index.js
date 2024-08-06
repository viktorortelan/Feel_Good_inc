
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Home from './pages/home'
import InfoImovel from './pages/imovel';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <InfoImovel/>
    
  </React.StrictMode>
);



