
import './index.scss';
import { Link } from 'react-router-dom';
import Rodape from '../../components/rodape';
import Cabecalho from '../../components/cabecalho'


export default function Contatos() {

    return(
        <div className="paginaContatos">

            <Cabecalho/>
      

            <div className="secao1">
                <div className="cardzin">

                    <div className="linha">
                        <img src="/assets/images/whatsappBlack.png" alt="whatsapp" />
                        <p>11 95930-6324</p>
                    </div>

                    <div className="linha">
                        <img src="/assets/images/whatsappBlack.png" alt="whatsapp" />
                        <p>11 95930-6324</p>
                    </div>

                    <div className="linha">
                        <img src="/assets/images/instagramBlack.png" alt="whatsapp" />
                        <p>@viktor_ortelan</p>
                    </div>

                </div>

                <div className="informacoes">
                    <div className="nome">
                        <h1>Nome:</h1>
                        <input type="text" placeholder='Coloque seu nome' />
                    </div>

                    <div className="email">
                       <h1>Email:</h1>
                        <input type="text" placeholder='Coloque seu email' />
                    </div>
                    <div className="numero">
                        <h1>telefone:</h1>
                        <input type="text" placeholder='Coloque seu numero' />
                    </div>
                    <div className="mensagem">
                        <h1>mensagem</h1>
                        <textarea  textarea placeholder='coloque sua mensagem aqui' ></textarea>
                    </div>
                    
                </div>
            </div>


            <div className="termos">
                <input type="checkbox" name='Termo de uso' />
                <p>Eu concordo e aceito os Termos de uso</p>
                <Link to="/">Solicitar Contato</Link>
            </div>

            <Link to="/"><img src="/assets/images/loganfeelgood.png" alt="balão de suporte" id="suporte" /></Link>

           <Rodape/>

        </div>
    )
}