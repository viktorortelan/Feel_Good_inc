import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Home from './pages/home';
import InfoImovel from './pages/imovel';
import Contatos from './pages/contatos';
import Sobre from './pages/sobree';
import NotFound from './pages/notfound';
import TelaAdm from './pages/adm';
import TelaAdd from './pages/addimovel';
import GestaoImovel from './pages/gestao';
import Telalogin from './pages/telalogin';
import GestaoCliente from './pages/gestaoCliente';
import NovoCard from './components/adcionaImovel';
import CadastroCliente from './pages/cadastroCliente';
import LoginCliente from './pages/loginCliente';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    const [exibir, setExibir] = useState([]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home exibir={exibir} />} />
                <Route path='/imovel' element={<InfoImovel />} />
                <Route path='/contatos' element={<Contatos />} />
                <Route path='/sobree' element={<Sobre />} />
                <Route path='/adm' element={<TelaAdm />} />
                <Route path='/addimovel' element={<TelaAdd setExibir={setExibir} />} />
                <Route path='/gestao' element={<GestaoImovel />} />
                <Route path='/telalogin' element={<Telalogin />} />
                <Route path='/gestaoCliente' element={<GestaoCliente />} />
                <Route path='/addimovel' element={<TelaAdd setExibir={setExibir} />} />
                <Route path='/cadastroCliente' element={<CadastroCliente/>} />
                <Route path='/loginCliente' element={<LoginCliente/>} />


                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
