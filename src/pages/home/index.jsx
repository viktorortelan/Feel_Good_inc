
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
        </div>
    )
}