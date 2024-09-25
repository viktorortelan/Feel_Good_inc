import './index.scss';
import Cabecalho from '../../components/cabecalho'
import Rodape from '../../components/rodape'
import { Link } from 'react-router-dom';



export default function TelaCliente() {


    return(
        <div className="pgcliente">
            <Cabecalho/>

            <div className="seccao1">
                <div className="texto">
                    <img id='usuario' src="/assets/images/viktor.png" alt="usuario" />
                   <div className="intro">
                                        {/* Substituir  apenas o nome do usuario, de acordo com o login dele.*/}
                        <h1>Bem-vindo, <span>Viktor Ortelan</span></h1>
                            <div className="email">
                                <img src="/assets/images/gmail.png" alt="gmail" />
                                {/* Substituir  apenas o email do usuario, de acordo com o login dele.*/}
                                <p>jvortelan@gmail.com</p>
                            </div>
                   </div>
                </div>

                <div className="editar">
                    <img src="/assets/images/edit.png" alt="edit" />
                    <button>EDITAR DADOS</button>
                </div>
            </div>

            <h1 id="atalho"><img src="/assets/images/seta.png" alt="seta" /> ATALHOS</h1>

            <div className="seccao2">
                <Link to="/contatos">
                    <h1>NOSSOS SUPORTE</h1>
                    <div className="caixinha">
                        <img src="/assets/images/balaoConversa.png" alt="balão" />
                        <p>Envie mensagem para nosso suporte, para que podemos tirar suas duvidas.</p>
                    </div>
                </Link>
                <Link to="/">
                    <h1>Fale com um corretor</h1>
                    <div className="caixinha">
                        <img id='contrato' src="/assets/images/contratoo.png" alt="balão" />
                        <p>Fale com um dos nossos corretores para poder fazer um orçamento.</p>
                    </div>
                </Link>
                <Link to="/sobree">
                    <h1>Sobre nós</h1>
                    <div className="caixinha">
                        <img src="/assets/images/likee.png" alt="balão" />
                        <p>Conheça mais sobre nós, por meio da nossa historia.</p>
                    </div>
                </Link>
                <Link to="/">
                    <h1>Busque oportunidades</h1>
                    <div className="caixinha">
                        <img src="/assets/images/prediosicon.png" alt="balão" />
                        <p>Olhe nossas variedades de imoveis que mais combina com você.</p>
                    </div>
                </Link>
                
            </div>


            <Rodape/>

        </div>
    )
}