import './index.scss'
import { Link } from "react-router-dom"


export default function InfoImovel() {
    return(
        <div className="info-imovel">

<div className="cabecalho">
                <div className="img">
                <img src="/assets/images/loganfeelgood.png" alt="ovo" />
                </div>
                <Link to="/">Home</Link>
                <Link to="/imovel">Imoveis</Link>
                <Link to="/">Corretor online</Link>
                <Link to="/">Contatos</Link>
                <Link to="/">Sobre nós</Link>
            </div>

            <div className="consulta">
                
                   <img src="/assets/images/gafisa.jpg" alt="" /> 
                
                <div className="info">
                    <Link to="/" id='pronto'>Pronto para morar</Link>
                    <p id='local'>GRAJAU - SÃO PAULO | SP</p>
                    <hr/>

                    <div className="prediocama">
                        <div className="esquerda">
                            <img src="/assets/images/ap.png" alt="" />
                            <p id="regiao">Porto Velho</p>
                        </div>
                        <div className="direita">
                            <img src="/assets/images/cama.png" alt="" />
                            <p id="regiao">3 suits</p>
                        </div>
                    </div>

                    <div className="metrocar">
                    <div className="esquerda2">
                            <img src="/assets/images/planta.png" alt="" />
                            <p id="tamanho">102m², 149m² e 192m² (Penthouse)</p>
                        </div>
                        <div className="direita2">
                            <img src="/assets/images/carro.png" alt="" />
                            <p id="vagas">2 vagas determinadas</p>
                        </div>
                    </div>

                    <div className="risco"></div>
                    <h1 id='preco'>Preço sob consulta </h1>
                    <div className="risco"></div>
                    <Link to="/" id='falaCorretor'>Pronto para morar</Link>
                </div>
                
            </div>

        </div>
    )
}