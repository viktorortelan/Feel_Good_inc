import './index.scss'
import { Link } from "react-router-dom"

export default function Telalogin() {
    return(
        <div className="tela-login">
            
            
                <div className="cartao">
                    <div className="fosco"> </div>
                        <div className="infos">
                            <h1>Login</h1>
                            <p>Faça Login para editar</p> 
                        
                
                            <img src="/assets/images/loganfeelgood.png" alt="" />
                            <input type="text" placeholder='Email:' />
                            <input type="text" placeholder='Senha:' />
                            <button>ENTRAR</button>
                        </div>
                
            </div>
        </div>
    )
}
