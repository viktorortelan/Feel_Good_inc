
import './index.scss';
import { Link } from 'react-router-dom';

 const ItemCard = ({ nome, status, localizacao, comodos, vagas }) => {
    return(
        <div className="cardImovel">
        <img src="/assets/images/predios.jpg" alt="predios" />
        <h1 id='titulo'>{nome}</h1>

        <div className="info1">
            <h1>{status}</h1>
            <p>Residencial</p>
        </div>

        <div className="localizacao">
            <img src="/assets/images/loca.png" alt="localizão" />
            <p>{localizacao}</p>
        </div>

        <h1 id='cinza'>{comodos}</h1>

        <div className="infoFinais">
            <img src="/assets/images/carrin.png" alt="carro" />
            <p>{vagas} vagas </p>
            <Link to="/">Saiba mais</Link>
        </div>
      </div>
    )
}

export default ItemCard;