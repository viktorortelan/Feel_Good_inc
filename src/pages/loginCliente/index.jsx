import './index.scss';
import direita from '../../assets/images/imovelTelaLogin.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { loginCliente } from '../../api/clienteApi.js';
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';

import storage from 'local-storage'



export default function LoginCliente() {

    const navigate = useNavigate();

    const [email, setEmail] = useState();
    const [telefone, setTelefone] = useState();

    async function logar() {
        
        try {
          
            const r = await loginCliente(email, telefone);
            storage('cliente-logado', r);

            setTimeout(() => {
                navigate('/telaCliente')
            }, 1200);

        } catch (err) {

            if(err.response)
                toast.error(err.response.data.err);
            else 
                toast.error(err.message);

        }

    }
 
    return (
        <div className="LoginCliente">
            <div className="esquerda">
            <Link id='voltar' to="/"> Voltar</Link>
                <div className="textin">
                    <img src="/assets/images/loganTCC7.png" alt="logo empresa" />  
                    <h1>Feel good inc.</h1>

                </div>
                <h1 id='façaLogin'> <span> Olá</span> Seja bem vindo</h1>
                
                <div className="cadastro">
                    
                    <div className="inputs">
                        <p>Seu Email:</p>
                        <input type="text" placeholder='ex: user@gmail.com' value={email} onChange={e => setEmail(e.target.value)}/>
                        <img id='aviao' src="/assets/images/aviaozin249.png" alt="" />
                    </div>
                    <div className="inputs">
                        <p>Seu Telefone:</p>
                        <input  type="text" placeholder='ex: 11 11111-1111' value={telefone} onChange={e => setTelefone(e.target.value)} />
                        <img id='tell' src="/assets/images/tellIcon.png" alt="" />
                    </div>

                    <button onClick={logar}>Entrar</button>
                    <Link to="/cadastroCliente">Criar conta</Link>
                </div>

                <p id='copyright'> ©feelgoodind copyright</p>

            </div> 

            <div className="direita" style={{backgroundImage: `url(${direita})`}}></div>
        </div>

    )
}