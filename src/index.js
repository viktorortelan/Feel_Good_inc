
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Home from './pages/home'
import InfoImovel from './pages/imovel';
import Contatos from './pages/contatos';
import Sobre from './pages/sobre';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/imovel' element={<InfoImovel/>} />
        <Route path='/contatos' element={<Contatos/>} />
        <Route path='/sobre' element={<Sobre/>} />
       </Routes>
    </BrowserRouter>    
  </React.StrictMode>
);



