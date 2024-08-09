
import './index.scss';
import { Link } from 'react-router-dom';

export default function Contatos() {

    return(
        <div className="paginaContatos">

            <div className="cabecalho">
                <div className="img">
                <img src="/assets/images/loganfeelgood.png" alt="ovo" />
                </div>
                <Link to="/">Home</Link>
                <Link to="/imovel">Imoveis</Link>
                <Link to="/">Corretor online</Link>
                <Link to="/contato">Contatos</Link>
                <Link to="/sobre">Sobre nós</Link>
            </div>

            <div className="secao1">
                <div className="cardzin">

                    <div className="linha">
                        <img src="/assets/images/whatsappBlack.png" alt="whatsapp" />
                        <p>11 95930-6324</p>
                    </div>

                    <div className="linha">
                        <img src="/assets/images/whatsappBlack.png" alt="whatsapp" />
                        <p>11 95930-6324</p>
                    </div>

                    <div className="linha">
                        <img src="/assets/images/instagramBlack.png" alt="whatsapp" />
                        <p>@viktor_ortelan</p>
                    </div>

                </div>

                <div className="informacoes">
                    <div className="nome">
                        <h1>Nome:</h1>
                        <input type="text" placeholder='Coloque seu nome' />
                    </div>

                    <div className="email">
                       <h1>Email:</h1>
                        <input type="text" placeholder='Coloque seu email' />
                    </div>
                    <div className="numero">
                        <h1>telefone:</h1>
                        <input type="text" placeholder='Coloque seu numero' />
                    </div>
                    <div className="mensagem">
                        <h1>mensagem</h1>
                        <textarea  textarea placeholder='coloque sua mensagem aqui' ></textarea>
                    </div>
                    
                </div>
            </div>


            <div className="termos">
                <input type="checkbox" name='Termo de uso' />
                <p>Eu concordo e aceito os Termos de uso</p>
                <Link to="/">Solicitar Contato</Link>
            </div>

            <Link to="/"><img src="/assets/images/loganfeelgood.png" alt="balão de suporte" id="suporte" /></Link>

            <div className="rodape">
                <div className="rodainfo1">
                    <p>FEEL GOOD INC</p>
                    <div className="imagens">
                        <Link to=""><img src="/assets/images/insta.png" alt="insta" /></Link>
                        <Link to="www.linkedin.com/in/joaovictorortelandonascimento"><img src="/assets/images/linkedin.png" alt="linkedin" /></Link>
                        <Link to=""><img src="/assets/images/whatsapp.png" alt="whatsapp" /></Link>
                        
                    </div>
                
                </div>
                    <div className="RiscoBranco"></div>
                    <div className="meioRodape">

                        <div className="esquerda">
                            <h1>Paginas</h1>
                            <Link to="/">Home</Link>
                            <Link to="/">Corretor online</Link>
                            <Link to="/contato">Contatos</Link>
                            <Link to="/">Sobre nós</Link>
                        </div>

                        <div className="direita">
                            <h1>Ajuda</h1>
                            <Link to="/">Reclame aqui</Link>
                            <Link to="/">Email de Contato</Link>
                            <Link to="/">Sustentabilidade</Link>
                        </div>
                    </div>
                    <div className="reta">
                        <div className="RiscoBranco2"></div>
                    </div>
                    <h1 id='fimRodape'>FEEL GOOD INC - Stratton oakmont S/A. - CNPJ 13.800.191/0001-69 - CEP 04773-000. Av. Coronel Octaviano de Freitas Costa, 463 - Socorro, São Paulo</h1>
            </div>

        </div>
    )
}