import { Link } from 'react-router-dom';
import './index.scss';

export default function TelaAdd() {
    return (
        <div className="Tela-add">
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
                        <Link to='/TelaAdd'>ADICIONAR IMÓVEIS</Link>
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
                        <img src="/assets/images/semfoto.png" alt="" /> {/* imagem ilustrativa */}
                    </div>

                    <div className="principal">
                        <div className="card">
                            <div className="mae2">
                                <div className="borda">
                                    <div className="mais">
                                        <hr id='um' />
                                        <hr id='dois' />
                                    </div>

                                </div>

                                <div className="botoes">
                                    <button>ADICIONAR IMAGEM </button>
                                    <button>EDITAR IMAGEM</button>
                                </div>
                                
                            </div>
                            <div className="cadastro">
                                <h1>ADICIONAR IMÓVEL</h1>
                                <input type="text" placeholder='Nome do apartamento' />
                                <input type="text" placeholder='Status' />
                                <input type="text" placeholder='Localização' />
                                <input type="text" placeholder='Vagas de garagem' />
                                <button>C A D A S T R A R</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
