import './index.scss'
import fundo from '../../assets/images/fundoADM.png';
//import { Link } from "react-router-dom"

export default function Telalogin() {
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
                                <input type="text" placeholder='ex: user@gmail.com' />
                                <img id='aviao' src="/assets/images/aviaozin249.png" alt="" />
                            </div>

                            <div className="inputs">
                                <p>Senha:</p>
                                <input  type="text" placeholder='senha'  />
                                <img id='tell' src="/assets/images/lock.png" alt="" />
                            </div>

                            <button>Entrar</button>
                    
                        </div>

                <p id='copyright'> ©feelgoodind copyright</p>
                        </div>
                
            </div>
        </div>
    )
}
