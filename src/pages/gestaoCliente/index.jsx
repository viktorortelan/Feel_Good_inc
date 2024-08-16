
import './index.scss';
import { Link } from 'react-router-dom';

export default function GestaoCliente() {
    return (
        <div className="gestaoCliente">
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
                        <Link to="/" >GESTÃO DE CLIENTE</Link>
                    </div>
            </div>

            <div className="direita">
                <div className="cabecalho">
                    <h1>Seja bem-vindo, viktor!</h1>
                    <img src="/assets/images/semfoto.png" alt="" />
                </div>

                <div className="tabela">
                    <div className="cab">

                        <div className="texto1">
                            <h1>ID</h1>
                            <h1>Nome</h1>
                            <h1>Gmail</h1>
                        </div>

                        <div className="texto2">
                            <h1>contato</h1>
                            <h1>Data</h1>
                        </div>

                        <div className="fots">
                            <img src="/assets/images/editar.png" alt="editor" />
                            <img src="/assets/images/lixeira.png" alt="lixeira" />
                        </div>

                    </div>

                    <div className="infos">
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                    </div>
                </div>
            </div>

                  
        </div>
    )
}