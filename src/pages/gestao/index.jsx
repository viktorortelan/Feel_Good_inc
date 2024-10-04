
import './index.scss';
import { Link } from 'react-router-dom';
import CabecalhoADM from '../../components/cabecalhoADM';

export default function GestaoImovel () {
    return (
      <div className="pagina_gestao">
        <div className="esquerda">
          <div className="intro">
            <img src="/assets/images/loganfeelgood.png" alt="logan" />
            <div className="texto">
              <h1> FEEL GOOD INC</h1>
              <p>ADMIN PAINEL</p>
            </div>
          </div>
          <div className="botoes">
            <Link to="/addimovel">ADICIONAR IMOVEL</Link>
            <Link to="/gestao">GESTÃO DE IMOVEIS</Link>
            <Link to="/gestaoCliente">GESTÃO DE CLIENTE</Link>
            <Link to="/gestaoCorretor" >GESTÃO DE CORRETORES</Link>
          </div>
        </div>

        <div className="direita">
          <CabecalhoADM/>

          <div className="lupa">
            <input type="text" placeholder='Nome do imovel'/>
            <img src="/assets/images/lupaaa.png" alt="lupa" />
          </div>

          <div className="table">
                <table className=' tabela'>

                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>nome do imovel</th>
                            <th>Status</th>
                            <th>corretor</th>
                            <th>Vendido</th>

                         </tr>
                    </thead>
                    
                    <tbody>
                        
                        <tr>
                            <td>1</td>
                            <td>morro da mandioca</td>
                            <td>pronto</td>
                            <td>viktor</td>
                            <td>Não</td>

                        </tr>

                       
                    </tbody>
                    
                </table>
            </div>
          


        </div>
      </div>
    );
}