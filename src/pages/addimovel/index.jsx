import { Link } from 'react-router-dom';
import './index.scss';
import { useState } from 'react';
import NovoCard from '../../components/adcionaImovel';
import RenderItemsOnly from '../../components/exbir';
import CabecalhoADM from '../../components/cabecalhoADM';

const TelaAdd = ({ setExibir }) =>  {


    return (
      <div className="Tela-add">
        <div className="esquerda">
          <div className="intro">
            <img src="/assets/images/loganfeelgood.png" alt="logan" />
            <div className="texto">
              <h1> FEEL GOOD INC</h1>
              <p>ADMIN PAINEL</p>
            </div>
          </div>
          <div className="botoes">
            <Link to="/addimovel">ADICIONAR IMOVEL</Link>
            <Link to="/gestao">GESTÃO DE IMOVEIS</Link>
            <Link to="/">GESTÃO DE CLIENTE</Link>
          </div>
        </div>

        <div className="direita">
         <CabecalhoADM/>

          <NovoCard setExibir={setExibir}/>   

        </div>
     
      </div>
    );
}

export default TelaAdd;
