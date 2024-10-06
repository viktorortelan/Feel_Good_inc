import './index.scss'
import fundo from '../../assets/images/fundoADM.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginADM } from '../../api/admApi';
import storage from 'local-storage';

import { toast } from 'react-toastify';

export default function Telalogin() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const navigate = useNavigate();

    async function logar() {
        try {
            
          const infos = await loginADM(email, senha);
          storage('adm-logado', infos); 
          navigate('/addimovel');
             
        } 
        catch (err) {
            if(err.response)
                toast.error(err.response.data.err);
            else 
                toast.error(err.message);
        }

    }


    return(
        <div className="tela-login" style={{backgroundImage:  `url(${fundo})` }}>
            
            
                <div className="cartao">
                    <div className="esquerda"> 
                        <img src="/assets/images/imovelTelaLogin2.jpg" alt="imagemLogin" />
                    </div>

                        <div className="infos">

                        <div className="textin">
                            <img src="/assets/images/loganTCC7.png" alt="logo empresa" />  
                            <h1>Feel good inc.</h1>
                        </div>

                        <h1 id='façaLogin'> <span> Olá</span> Seja bem vindo</h1>

                        <div className="cadastro">
                    
                            <div className="inputs">
                                <p>Seu Email:</p>
                                <input type="text" placeholder='ex: user@gmail.com' value={email} onChange={e => setEmail(e.target.value)}  />
                                <img id='aviao' src="/assets/images/aviaozin249.png" alt="" />
                            </div>

                            <div className="inputs">
                                <p>Senha:</p>
                                <input  type="text" placeholder='senha' value={senha} onChange={e => setSenha(e.target.value)} />
                                <img id='tell' src="/assets/images/lock.png" alt="" />
                            </div>

                            <button onClick={logar}>Entrar</button>
                    
                        </div>

                            <p id='copyright'> ©feelgoodind copyright</p>
                        </div>
                
            </div>
        </div>
    )
}
