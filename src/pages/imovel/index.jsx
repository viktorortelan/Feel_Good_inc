import './index.scss'


export default function InfoImovel() {
    return(
        <div className="info-imovel">

            <div className="cabecalho">
                <img src="/assets/images/loganfeelgood.png" alt="" />
                
                
                <nav>HOME</nav>
                <nav>IMÓVEIS</nav>
                <nav>CORRETOR ONLINE</nav>
                <nav>CONTATOS</nav>
                <nav >SOBRE NÓS</nav>
                
            </div>

            <div className="consulta">
                <div className="imageGafisa">
                   <img src="/assets/images/gafisa.jpg" alt="" /> 
                </div>

                <div className="locais">
                    <button>PRONTO PARA MORAR</button>

                    <h5>GRAJAÚ- SÃO PAULO | SP</h5>

                    <p className="borda"></p>

                    
                    <img src="/assets/images/ap.png" className='IMGAp' alt="" />

                    <h6>PORTO VELHO</h6>

                    <div className="suite">
                       <img src="/assets/images/cama.png" alt="" className='imgcama' />
                    
                        <h6>2 e 3 Suítes</h6> 
                    </div>

                    <div className="parede">
                        <img src="/assets/images/parede.png" alt="" />

                        <h6 className='um'>102m², 149m² e </h6>
                        <h6>192m² (Penthouse)</h6>
                    </div>

                    <div className="estacionamento">
                        <img src="/assets/images/carro.png" alt="" />

                        <h6 className='move'>2 vagas</h6>

                        <h6>determinadas</h6>
                    </div>

                    <div className="Segundaborda">
                        
                    </div>

                    <div className="preco">
                        <p>Preço sob consulta</p>
                    </div>

                    <div className="Terceiraborda">

                    </div>

                    <div className="botao">
                        <button>FALE COM UM CONSULTOR</button>
                    </div>
                </div>
            </div>

            <div className="galeria">
                <p>GALERIA DE IMAGENS</p>
            

            <div className="Quartaborda">

            </div>

            <img src="public/assets/images/brinque.jpg" alt="" />
            </div>
        </div>
    )
}