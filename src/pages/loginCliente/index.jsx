import './index.scss';
import direita from '../../assets/images/imovelTelaLogin.png'
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



export default function LoginCliente() {

 
    return (
        <div className="LoginCliente">
            <div className="esquerda">
                <div className="textin">
                    <img src="/assets/images/loganTCC7.png" alt="logo empresa" />  
                    <h1>Feel good inc.</h1>

                </div>

                <h1 id='façaLogin'> <span> Olá</span> Seja bem vindo</h1>
                
                <div className="cadastro">
                    
                    <div className="inputs">
                        <p>Seu Email:</p>
                        <input  type="text" placeholder='ex: user@gmail.com'/>
                        <img id='aviao' src="/assets/images/aviaozin249.png" alt="" />
                    </div>
                    <div className="inputs">
                        <p>Seu Telefone:</p>
                        <input  type="text" placeholder='ex: 11 11111-1111' />
                        <img id='tell' src="/assets/images/tellIcon.png" alt="" />
                    </div>

                    <button >Entrar</button>
                    <Link to="/cadastroCliente">Criar conta</Link>
                </div>

                <p id='copyright'> ©feelgoodind copyright</p>

            </div> 

            <div className="direita" style={{backgroundImage: `url(${direita})`}}></div>
        </div>

    )
}