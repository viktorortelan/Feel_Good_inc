
import './index.scss';
import { Link } from "react-router-dom";


export default function Home() {

    return(
        <div className="pagina_home">
            <div className="cabecalho">
                <img src="/assets/images/loganfeelgood.png" alt="ovo" />
                <a href="/">Home</a>
                <Link to="/"></Link>
            </div>
        </div>
    )
}