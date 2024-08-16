
import './index.scss';
import { Link } from 'react-router-dom';

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
          </div>
        </div>

        <div className="direita">
          <div className="cabecalho">
            <h1>Seja bem-vindo, viktor!</h1>
            <img src="/assets/images/semfoto.png" alt="" />
          </div>


          <div className="card">

            <div className="cabe">
                <div className="texto">
                    <p>Nome</p>
                    <p>Preço</p>
                    <p>Categoria</p>
                </div>
                <div className="img">
                    <img src="/assets/images/editar.png" alt="editor" />
                    <img src="/assets/images/lixeira.png" alt="lixo" />
                </div>
            </div>

            <div className="info">
                <input type="text"  />
                <input type="text"  />
                <input type="text"  />
                <input type="text"  />
                <input type="text"  />
                <input type="text"  />
            </div>
          </div>


        </div>
      </div>
    );
}