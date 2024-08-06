
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

            <div className="secao1">
                <div className="card">
                    <img src="/assets/images/predios.jpg" alt="predio" />
                    <h1 id='titulo_card'>Leopodino</h1>
                    <div className="info1">
                        <h1 id='status'>Pronto</h1>
                        <p id='tipo'>Residencial</p>
                    </div>

                    <div className="infoLoca">
                        <img id='loca' src="/assets/images/loca.png" alt="localização" /> 
                        <h1 id='localiza'> Moema</h1>
                    </div>

                    <p id="cinza">4 comodos, 240M</p>
                    <div className="info2">
                    <img src="/assets/images/carrin.png" alt="carrinho_vaga" />
                        <h1 id='vagas'> 2 vagas</h1>
                        <Link to="/" id='saiba_mais'> Saiba mais</Link>
                    </div>
                </div>

                <div className="card2">
                    <img src="/assets/images/predios.jpg" alt="predio" />
                    <h1 id='titulo_card'>Mona lisa</h1>
                    <div className="info1">
                        <h1 id='status'>Pronto</h1>
                        <p id='tipo'>Residencial</p>
                    </div>

                    <div className="infoLoca">
                        <img id='loca' src="/assets/images/loca.png" alt="localização" /> 
                        <h1 id='localiza'> Vila Olimpia</h1>
                    </div>

                    <p id="cinza">5 comodos, 280M</p>
                    <div className="info2">
                    <img src="/assets/images/carrin.png" alt="carrinho_vaga" />
                        <h1 id='vagas'> 3 vagas</h1>
                        <Link to="/" id='saiba_mais'> Saiba mais</Link>
                    </div>
                </div>
                <div className="card3">
                    <img src="/assets/images/predios.jpg" alt="predio" />
                    <h1 id='titulo_card'>Star</h1>
                    <div className="info1">
                        <h1 id='status'>Pronto</h1>
                        <p id='tipo'>Residencial</p>
                    </div>

                    <div className="infoLoca">
                        <img id='loca' src="/assets/images/loca.png" alt="localização" /> 
                        <h1 id='localiza'> Morumbi</h1>
                    </div>

                    <p id="cinza">6 comodos, 300M</p>
                    <div className="info2">
                    <img src="/assets/images/carrin.png" alt="carrinho_vaga" />
                        <h1 id='vagas'> 2 vagas</h1>
                        <Link to="/" id='saiba_mais'> Saiba mais</Link>
                    </div>
                </div>

                
            </div>
           
        </div>
    )
}