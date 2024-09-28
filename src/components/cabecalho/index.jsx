import './index.scss';
import { Link } from 'react-router-dom';

export default function Cabecalho() {
    return(
        <div className="cabecalho">
        <div className="img">
        <img src="/assets/images/loganfeelgood.png" alt="ovo" />
        </div>
        <Link to="/">Home</Link>
        <Link to="/telalogin">Imoveis</Link>
        <Link to="/contatos">Contatos</Link>
        <Link to="/sobree">Sobre nós</Link>
        <Link to="/cadastroCliente">Login</Link>
    </div>
    )
}