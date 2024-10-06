import './index.scss';
import { Link } from 'react-router-dom';

export default function Cabecalho() {
    return(
        <div className="cabecalho">
        <div className="img">
            <Link to="/"><img src="/assets/images/loganfeelgood.png" alt="ovo" /></Link>
        </div>
        <Link to="/">Home</Link>
        <Link to="/contatos">Contatos</Link>
        <Link to="/sobree">Sobre nós</Link>
        <Link to="/cadastroCliente">cadastro</Link>
        <Link to="/telaCliente">Entrar</Link>
    </div>
    )
}