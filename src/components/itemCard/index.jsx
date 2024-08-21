
import './index.scss';
import { Link } from 'react-router-dom';

 const ItemCard = ({ item }) => {
    return(
        <div className="cardImovel">
        <img src="/assets/images/predios.jpg" alt="predios" />
        <h1 id='titulo'>{item.nome}</h1>

        <div className="info1">
            <h1>{item.status}</h1>
            <p>Residencial</p>
        </div>

        <div className="localizacao">
            <img src="/assets/images/loca.png" alt="localizão" />
            <p>{item.localizacao}</p>
        </div>

        <h1 id='cinza'>{item.comodos}</h1>

        <div className="infoFinais">
            <img src="/assets/images/carrin.png" alt="carro" />
            <p>{item.vagas} vagas </p>
            <Link to="/">Saiba mais</Link>
        </div>
      </div>
    )
}

export default ItemCard;