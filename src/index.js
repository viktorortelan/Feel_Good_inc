
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Home from './pages/home'
import InfoImovel from './pages/imovel';
import Contatos from './pages/contatos';
import Sobre from './pages/sobree';
import NotFound from './pages/notfound';
import TelaAdm from './pages/adm';
import TelaAdd from './pages/addimovel';
import GestaoImovel from './pages/gestao';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/imovel' element={<InfoImovel/>} />
        <Route path='/contatos' element={<Contatos/>} />
        <Route path='/sobree' element={<Sobre/>} />
        <Route path='/adm' element={<TelaAdm/>} />
        <Route path='/addimovel' element={<TelaAdd/>} />
        <Route path='/gestao' element={<GestaoImovel/>} />


        <Route path='*' element={<NotFound/>} />
       </Routes>
    </BrowserRouter>    
  </React.StrictMode>
);



