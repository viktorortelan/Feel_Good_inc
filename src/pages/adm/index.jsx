import './index.scss'
import { Link } from 'react-router-dom';

export default function TelaAdm() {
    return(
        <div className="Tela-adm">
            <div className="esquerda">

                <div className="intro">
                    <img src="/assets/images/loganfeelgood.png" alt="logan" />
                    <div className="texto">
                        <h1> FEEL GOOD INC</h1>
                        <p>ADMIN PAINEL</p>
                    </div>

                </div>
                    <div className="botoes">
                        
                        <Link to="/addimovel" >ADICIONAR IMOVEL</Link>
                        <Link to="/gestao" >GESTÃO DE IMOVEIS</Link>
                        <Link to="/gestaoCliente" >GESTÃO DE CLIENTE</Link>
                    </div>
            </div>

            <div className="direita">
                <div className="cabecalho">
                    <h1>Seja bem-vindo, <span>viktor!</span></h1>
                    <img src="/assets/images/semfoto.png" alt="" />
                </div>
            </div>

                  
        </div>
    )
}   