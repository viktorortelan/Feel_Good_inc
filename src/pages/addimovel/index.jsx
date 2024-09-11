import { Link } from 'react-router-dom';
import './index.scss';
import { useState } from 'react';
import NovoCard from '../../components/adcionaImovel';
import RenderItemsOnly from '../../components/exbir';


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
          <div className="cabecalho">
            <h1>Seja bem-vindo, viktor!</h1>
            <img src="/assets/images/viktor.png" alt="" />
          </div>

          <NovoCard setExibir={setExibir}/>   

        </div>
     
      </div>
    );
}

export default TelaAdd;
