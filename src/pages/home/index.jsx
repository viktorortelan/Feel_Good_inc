
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
                  
            <h1 id='um'>Promoção</h1>
                    <h1 id='dois'>Promoção</h1>
                    <h1 id='tres'>Promoção</h1>
           
        </div>
    )
}