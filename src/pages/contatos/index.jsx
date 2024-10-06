
import './index.scss';
import Rodape from '../../components/rodape';
import Cabecalho from '../../components/cabecalho'
import Balao from '../../components/balaoSup';
import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contatos() {
 const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [mensagem, setMensagem] = useState('');

  const send = (e) => {
        try {
        const params = {
            client_name: nome,      
            client_message: mensagem,
            client_email: email,      
            client_phone: telefone,   
        };
        
        emailjs.send('service_8c7st3c', 'template_svt9t03', params, 'mrgLB4R-boLbQ_fZS')
          .then(() => alert('Sua solicitação de suporte foi enviada com sucesso!'))
          .catch(() => alert('Erro ao enviar a solicitação de suporte.'));
          setEmail("") 
          setTelefone("") 
          setNome("") 
          setMensagem("")
        } 
        catch (err) {
            console.log(err.message)
        }
      };


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

                <div className="cartao">
                    <div className="informacoes">
                        <div className="nome">
                            <h1>Nome:</h1>
                            <input type="text" placeholder='Coloque seu nome' value={nome} onChange={e => setNome(e.target.value)} />
                        </div>

                        <div className="email">
                        <h1>Email:</h1>
                            <input type="text" placeholder='Coloque seu email' value={email} onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className="numero">
                            <h1>telefone:</h1>
                            <input type="text" placeholder='Coloque seu numero' value={telefone} onChange={e => setTelefone(e.target.value)} />
                        </div>
                        <div className="mensagem">
                            <h1>mensagem</h1>
                            <textarea  textarea placeholder='coloque sua mensagem aqui' value={mensagem} onChange={e => setMensagem(e.target.value)} ></textarea>
                        </div>
                        
                    </div>
                    <div className="termos">
                        <p>Eu concordo e aceito os Termos de uso</p>
                        <button onClick={send}>Solicitar Contato</button>
                    </div>
                </div>
            </div>


           

            <Balao/>

            <Rodape/>

        </div>
    )
}