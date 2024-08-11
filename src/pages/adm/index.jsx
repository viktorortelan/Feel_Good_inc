import './index.scss'
import { Link } from 'react-router-dom';

export default function TelaAdm() {
    return(
        <div className="Tela-adm">
            
                <div className="cabecalho">
                    <img src="/assets/images/loganfeelgood.png" alt="ovo" />
                    <div className="mae">
                        
                       <div className="feelgood">
                            <h1>FEEL GOOD INC</h1>
                        </div>
                    

                        <div className="texto">
                        
                            <p>A D M I N</p>
                            <p>P A I N E L </p>
                        
                        </div> 
                        <div className="add">
                            <Link to='/addimovel'>ADICIONAR IMÓVEIS</Link>
                        </div>

                        <div className="gestao-imoveis">
                            <Link>GESTÃO DE IMÓVEIS</Link>
                        </div>

                        <div className="gestao-cliente">
                            <Link>GESTÃO DE CLIENTE</Link>
                        </div>
                    </div>
                    <div className="borda">
                        <hr id='borda' /> 
                    </div>   

                    <div className="tela-boasvindas">
                        <h1>Seja bem-vindo, Viktor!</h1>

                        <div className="img">
                           <img src="/assets/images/semfoto.png" alt="" />  {/* imagem ilustrativa*/}
                        </div>

                    </div>
                </div>   
        </div>
    )
}   