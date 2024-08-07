
import './index.scss';
import { Link } from "react-router-dom";


export default function Home() {

    return(
        <div className="pagina_home">
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
            <div className="banners">
                <img src="/assets/images/banner 1.png" alt="banner1" />
            </div>

            <h1 id='lancamentos'>ULTIMOS LANÇAMENTOS</h1>
                    
                    

            <div className="secao1">
                  <div className="card">
                    <img src="/assets/images/predios.jpg" alt="predios" />
                    <h1 id='titulo'>Folianopolis</h1>

                    <div className="info1">
                        <h1>Pronto</h1>
                        <p>Residencial</p>
                    </div>

                    <div className="localizacao">
                        <img src="/assets/images/loca.png" alt="localizão" />
                        <p>Moema</p>
                    </div>

                    <h1 id='cinza'>5 comodos, 240M</h1>

                    <div className="infoFinais">
                        <img src="/assets/images/carrin.png" alt="carro" />
                        <p>2 vagas </p>
                        <Link to="/">Saiba mais</Link>
                    </div>
                  </div>

                  <div className="card2">
                    <img src="/assets/images/predios.jpg" alt="predios" />
                    <h1 id='titulo'>Star</h1>

                    <div className="info1">
                        <h1>Pronto</h1>
                        <p>Residencial</p>
                    </div>

                    <div className="localizacao">
                        <img src="/assets/images/loca.png" alt="localizão" />
                        <p>Vila olimpia</p>
                    </div>

                    <h1 id='cinza'>3 comodos, 180M</h1>

                    <div className="infoFinais">
                        <img src="/assets/images/carrin.png" alt="carro" />
                        <p>1 vagas </p>
                        <Link to="/">Saiba mais</Link>
                    </div>
                  </div>

                  <div className="card3">
                    <img src="/assets/images/predios.jpg" alt="predios" />
                    <h1 id='titulo'>Cracolandia</h1>

                    <div className="info1">
                        <h1>Pronto</h1>
                        <p>Residencial</p>
                    </div>

                    <div className="localizacao">
                        <img src="/assets/images/loca.png" alt="localizão" />
                        <p>Centro</p>
                    </div>

                    <h1 id='cinza'>0 comodos, 0M</h1>

                    <div className="infoFinais">
                        <img src="/assets/images/carrin.png" alt="carro" />
                        <p>0 vagas </p>
                        <Link to="/">Saiba mais</Link>
                    </div>
                  </div>

            </div>
                  
            <div className="missoes">
                <div className="missao1">
                    <img src="/assets/images/casinha.png" alt="casinha" />
                    <p>Milhares de opções para encontrar</p>
                    <p id="red">o imóvel que combina com você </p>
                </div>

                <div className="risco"></div>

                <div className="missao2">
                    <img src="/assets/images/joinha.png" alt="joia" />
                    <p>Uma rede nacional com mais de</p>
                    <p id="red">9 mil consultores locais especializados </p>
                </div>

                <div className="risco2"></div>

                <div className="missao3">
                    <img src="/assets/images/coracao.png" alt="joia" />
                    <p>Inteligência de mercado para</p>
                    <p id="red">te ajudar a fazer o melhor negócio </p>
                </div>
            </div>

            <div className="tituloPredios">
                <h1>Inspire-se com a nossa seleção</h1>
                <p>Confira as oportunidades que separamos para você</p>
            </div>

            <div className="secao2">
            <div className="card">
                    <img src="/assets/images/predios.jpg" alt="predios" />
                    <h1 id='titulo'>Folianopolis</h1>

                    <div className="info1">
                        <h1>Pronto</h1>
                        <p>Residencial</p>
                    </div>

                    <div className="localizacao">
                        <img src="/assets/images/loca.png" alt="localizão" />
                        <p>Moema</p>
                    </div>

                    <h1 id='cinza'>5 comodos, 240M</h1>

                    <div className="infoFinais">
                        <img src="/assets/images/carrin.png" alt="carro" />
                        <p>2 vagas </p>
                        <Link to="/">Saiba mais</Link>
                    </div>
                  </div>

                  <div className="card1">
                    <img src="/assets/images/predios.jpg" alt="predios" />
                    <h1 id='titulo'>Star</h1>

                    <div className="info1">
                        <h1>Pronto</h1>
                        <p>Residencial</p>
                    </div>

                    <div className="localizacao">
                        <img src="/assets/images/loca.png" alt="localizão" />
                        <p>Vila olimpia</p>
                    </div>

                    <h1 id='cinza'>3 comodos, 180M</h1>

                    <div className="infoFinais">
                        <img src="/assets/images/carrin.png" alt="carro" />
                        <p>1 vagas </p>
                        <Link to="/">Saiba mais</Link>
                    </div>
                  </div>

                  <div className="card3">
                    <img src="/assets/images/predios.jpg" alt="predios" />
                    <h1 id='titulo'>Cracolandia</h1>

                    <div className="info1">
                        <h1>Pronto</h1>
                        <p>Residencial</p>
                    </div>

                    <div className="localizacao">
                        <img src="/assets/images/loca.png" alt="localizão" />
                        <p>Centro</p>
                    </div>

                    <h1 id='cinza'>0 comodos, 0M</h1>

                    <div className="infoFinais">
                        <img src="/assets/images/carrin.png" alt="carro" />
                        <p>0 vagas </p>
                        <Link to="/">Saiba mais</Link>
                    </div>
                  </div>

                  <div className="card4">
                    <img src="/assets/images/predios.jpg" alt="predios" />
                    <h1 id='titulo'>Cracolandia</h1>

                    <div className="info1">
                        <h1>Pronto</h1>
                        <p>Residencial</p>
                    </div>

                    <div className="localizacao">
                        <img src="/assets/images/loca.png" alt="localizão" />
                        <p>Centro</p>
                    </div>

                    <h1 id='cinza'>0 comodos, 0M</h1>

                    <div className="infoFinais">
                        <img src="/assets/images/carrin.png" alt="carro" />
                        <p>0 vagas </p>
                        <Link to="/">Saiba mais</Link>
                    </div>
                  </div>
            </div>

            <div className="secao3">
            <div className="card">
                    <img src="/assets/images/predios.jpg" alt="predios" />
                    <h1 id='titulo'>Folianopolis</h1>

                    <div className="info1">
                        <h1>Pronto</h1>
                        <p>Residencial</p>
                    </div>

                    <div className="localizacao">
                        <img src="/assets/images/loca.png" alt="localizão" />
                        <p>Moema</p>
                    </div>

                    <h1 id='cinza'>5 comodos, 240M</h1>

                    <div className="infoFinais">
                        <img src="/assets/images/carrin.png" alt="carro" />
                        <p>2 vagas </p>
                        <Link to="/">Saiba mais</Link>
                    </div>
                  </div>

                  <div className="card1">
                    <img src="/assets/images/predios.jpg" alt="predios" />
                    <h1 id='titulo'>Star</h1>

                    <div className="info1">
                        <h1>Pronto</h1>
                        <p>Residencial</p>
                    </div>

                    <div className="localizacao">
                        <img src="/assets/images/loca.png" alt="localizão" />
                        <p>Vila olimpia</p>
                    </div>

                    <h1 id='cinza'>3 comodos, 180M</h1>

                    <div className="infoFinais">
                        <img src="/assets/images/carrin.png" alt="carro" />
                        <p>1 vagas </p>
                        <Link to="/">Saiba mais</Link>
                    </div>
                  </div>

                  <div className="card3">
                    <img src="/assets/images/predios.jpg" alt="predios" />
                    <h1 id='titulo'>Cracolandia</h1>

                    <div className="info1">
                        <h1>Pronto</h1>
                        <p>Residencial</p>
                    </div>

                    <div className="localizacao">
                        <img src="/assets/images/loca.png" alt="localizão" />
                        <p>Centro</p>
                    </div>

                    <h1 id='cinza'>0 comodos, 0M</h1>

                    <div className="infoFinais">
                        <img src="/assets/images/carrin.png" alt="carro" />
                        <p>0 vagas </p>
                        <Link to="/">Saiba mais</Link>
                    </div>
                  </div>

                  <div className="card4">
                    <img src="/assets/images/predios.jpg" alt="predios" />
                    <h1 id='titulo'>Cracolandia</h1>

                    <div className="info1">
                        <h1>Pronto</h1>
                        <p>Residencial</p>
                    </div>

                    <div className="localizacao">
                        <img src="/assets/images/loca.png" alt="localizão" />
                        <p>Centro</p>
                    </div>

                    <h1 id='cinza'>0 comodos, 0M</h1>

                    <div className="infoFinais">
                        <img src="/assets/images/carrin.png" alt="carro" />
                        <p>0 vagas </p>
                        <Link to="/">Saiba mais</Link>
                    </div>
                  </div>
            </div>
            <Link to="/"><img src="/assets/images/loganfeelgood.png" alt="balão de suporte" id="suporte" /></Link>
           
        </div>
    )
}