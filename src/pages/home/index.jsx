
import './index.scss';
import { Link } from "react-router-dom";
import Rodape from '../../components/rodape';
import Cabecalho from '../../components/cabecalho';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ItemCard from '../../components/itemCard';
import Balao from '../../components/balaoSup';




export default function Home({ exibir }) {

    


    const [array, setArray] = useState([]);

    const a = async () => {

        let b = await axios.get('http://localhost:8080/viewImoveis');
        let values = b.data;
        setArray(values);
        console.log(array)

    }

    useEffect(() => { a() });


    return (
        <div className="pagina_home">

            <Cabecalho />


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




            </div>



            <div className="missoes">
                <div className="missao1">
                    <img src="/assets/images/casinha.png" alt="casinha" />
                    <p>Milhares de opções para encontrar</p>
                    <p id="red">o imóvel que combina com você </p>
                </div>

                <div className="risco"></div>

                <div className="missao2">
                    <img src="/assets/images/joinha.png" alt="joia" />
                    <p>Uma rede nacional com mais de</p>
                    <p id="red">9 mil consultores locais especializados </p>
                </div>

                <div className="risco2"></div>

                <div className="missao3">
                    <img src="/assets/images/coracao.png" alt="joia" />
                    <p>Inteligência de mercado para</p>
                    <p id="red">te ajudar a fazer o melhor negócio </p>
                </div>
            </div>

            <div className="tituloPredios">
                <h1>Inspire-se com a nossa seleção</h1>
                <p>Confira as oportunidades que separamos para você</p>
            </div>

            { <div className="secao2">

                {array.map(item =>
                    
                    
                    <ItemCard
                        capa={item.nm_imagem}
                        nome={item.nm_apartamento}
                        status={item.st_status}
                        localizacao={item.lc_localizacao}
                        comodos={item.com_tamanho}
                        vagas={item.vg_vagas}
                        id={item.id_cardImovel}
                    />)}

            </div> }


            {/* <Link to="/"><img src="/assets/images/loganfeelgood.png" alt="balão de suporte" id="suporte" /></Link> */}
            <Balao/>
            <Rodape />

        </div>
    )
}