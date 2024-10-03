import './index.scss'
import { Link, useParams } from "react-router-dom"
import Rodape from '../../components/rodape';
import Cabecalho from '../../components/cabecalho'
import Balao from '../../components/balaoSup';
import axios from 'axios';
import Slider from 'react-slick';
import { useEffect, useState } from 'react';

export default function InfoImovel() {


        const { id } = useParams();
        const [obj, setObj] = useState({});

       async function verify() {
            const x = await axios.get(`http://localhost:8080/verifyId/${id}`);
            const value = x.data;
            setObj(value[0]);
        }

        useEffect(() => {verify()});


        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
          };

    return(
        <div className="info-imovel">

        <Cabecalho/>


            <div className="consulta">
                
                   <img src="/assets/images/gafisa.jpg" alt="" /> 
                
                <div className="info">
                    <Link to="/" id='pronto'>{obj.st_status}</Link>
                    <p id='local'>{obj.lc_localizacao}</p>
                    <div className="risco"></div>

                    <div className="prediocama">
                        <div className="esquerda">
                            <img src="/assets/images/ap.png" alt="" />
                            <p id="regiao">{obj.rg_regiao}</p>
                        </div>
                        <div className="direita">
                            <img src="/assets/images/cama.png" alt="" />
                            <p id="regiao">{obj.st_suites}</p>
                        </div>
                    </div>

                    <div className="metrocar">
                    <div className="esquerda2">
                            <img src="/assets/images/planta.png" alt="" />
                            <p id="tamanho">{obj.com_tamanho}</p>
                        </div>
                        <div className="direita2">
                            <img src="/assets/images/carro.png" alt="" />
                            <p id="vagas">{obj.vg_vagas}</p>
                        </div>
                    </div>

                    <div className="risco"></div>
                    <h1 id='preco'>Preço sob consulta </h1>
                    <div className="risco"></div>
                    <Link to="/" id='falaCorretor'>{obj.st_status}</Link>
                </div>
                
            </div>

            <div className="seccao1">
                <h1 id='titulo'>GALERIA DE IMAGENS</h1>
                <div id="risco"></div>

                <div className="carousel-container">
                    <div className="carousel-slider">
                        <div className="carousel-slide">
                            <img src="/assets/images/viktor.png" alt="Image 1" />
                        </div>
                        <div className="carousel-slide">
                            <img src="" alt="Image 2" />
                        </div>
                        <div className="carousel-slide">
                            <img src="" alt="Image 3" />
                        </div>
                        <div className="carousel-slide">
                             <img src="" alt="Image 4" />
                        </div>
                    </div>
                </div>

    <div className="seccao2">
        <h1 id='titulo'>{obj.tt_titulo}</h1>

        <p id='sobre'>{obj.sb_sobre}</p>
    </div>
            </div>

            <Balao/>
            <Rodape/>

        </div>
    )
}