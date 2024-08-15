import './index.scss';
import { Link } from 'react-router-dom';

export default function Cabecalho() {
    return(
        <div className="cabecalho">
        <div className="img">
        <img src="/assets/images/loganfeelgood.png" alt="ovo" />
        </div>
        <Link to="/">Home</Link>
        <Link to="/imovel">Imoveis</Link>
        <Link to="/">Corretor online</Link>
        <Link to="/contato">Contatos</Link>
        <Link to="/sobree">Sobre nós</Link>
    </div>
    )
}