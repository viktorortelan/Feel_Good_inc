
import './index.scss';
import { Link } from "react-router-dom";

export default function Rodape() {
    return(
        <div className="rodape">
                <div className="rodainfo1">
                    <p>FEEL GOOD INC</p>
                    <div className="imagens">
                        <Link to=""><img src="/assets/images/insta.png" alt="insta" /></Link>
                        <a href="www.linkedin.com/in/joaovictorortelandonascimento"><img  src="/assets/images/linkedin.png" alt="linkedin" /></a>          
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
                            <Link to="/sobree">Sobre nós</Link>
                        </div>

                        <div className="direita">
                            <h1>Ajuda</h1>
                            <Link to="/">Reclame aqui</Link>
                            <Link to="/">Email de Contato</Link>
                    <Link to="/">Sustentabilidade</Link>
                    <p>Fundado por Victor ortelan </p>
                        </div>
                    </div>
                    <div className="reta">
                        <div className="RiscoBranco2"></div>
                    </div>
                    <h1 id='fimRodape'>FEEL GOOD INC - Stratton oakmont S/A. - CNPJ 13.800.191/0001-69 - CEP 04773-000. Av. Coronel Octaviano de Freitas Costa, 463 - Socorro, São Paulo</h1>
            </div>
    )
}