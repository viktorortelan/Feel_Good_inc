
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
                <Link to="/">Imoveis</Link>
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
                        <img src="/assets/images/loca.png" alt="localização" /> 
                        <h1 id='localiza'> Moema</h1>
                    </div>
                    
                    <p id="cinza">4 comodos, 240M</p>
                    <div className="info2">
                        <h1><img src="/assets/images/carrin.png" alt="carrinho_vaga" /> 2 vagas</h1>
                        <Link to="/"> Saiba mais</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}