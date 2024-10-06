import './index.scss';
import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Corretoro() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [estado, setEstado] = useState('')
    

    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
        document.body.style.overflow = showPopup ? 'auto' : 'hidden'; 
    };

    const send = (e) => {
        try {
        const params = {
          user_name: nome,
          user_email: email,
          user_phone: telefone,
          user_estado: estado,
          my_phone: '11959306324',
          my_name: 'viktor ortelan',
          my_email: 'jvortelan@gmail.com',
          message: 'bleeeeeeeeeeeeeeee',
        };
        
        emailjs.send('service_8c7st3c', 'template_few7lr9', params, 'mrgLB4R-boLbQ_fZS')
          .then(() => alert('Email enviado para: '))
          .catch(() => alert('Erro ao enviar email!'));
          setEmail("") 
          setTelefone("") 
          setNome("") 
          setEstado("") 
        } 
        catch (err) {
            console.log(err.message)
        }
      };


    return (
        <div className="Paginacorretoro">
           
           <button onClick={togglePopup} className="open-popup-btn">
                Falar com Corretor
            </button>

            {showPopup && (
                <div className="popup">
                    <div className="corretor">

                    <div className="close-icon" onClick={togglePopup}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="currentColor" d="M19.78 4.22a1 1 0 00-1.41 0L12 11.59 5.63 5.22a1 1 0 00-1.41 1.41L10.59 12l-6.36 6.36a1 1 0 001.41 1.41L12 12.41l6.36 6.36a1 1 0 001.41-1.41L13.41 12l6.36-6.36a1 1 0 000-1.41z"/>
                            </svg>
                    </div>

                    <div className="titulo">
                        <h1>FALE COM UM CORRETOR ONLINE</h1>
                        <img src="/assets/images/chat.png" alt="balaoChat" />
                    </div>

                    <div id="linha"></div>

                    <div className="infos">
                        <div className="regiao">
                            <h1>Escolha a regional:</h1>
                            <select onChange={e => setEstado(e.target.value)}>
                                <option value="" disabled selected >Selecione o estado</option>
                                <option value="AC">Acre</option>
                                <option value="AL">Alagoas</option>
                                <option value="AP">Amapá</option>
                                <option value="AM">Amazonas</option>
                                <option value="BA">Bahia</option>
                                <option value="CE">Ceará</option>
                                <option value="DF">Distrito Federal</option>
                                <option value="ES">Espírito Santo</option>
                                <option value="GO">Goiás</option>
                                <option value="MA">Maranhão</option>
                                <option value="MT">Mato Grosso</option>
                                <option value="MS">Mato Grosso do Sul</option>
                                <option value="MG">Minas Gerais</option>
                                <option value="PA">Pará</option>
                                <option value="PB">Paraíba</option>
                                <option value="PR">Paraná</option>
                                <option value="PE">Pernambuco</option>
                                <option value="PI">Piauí</option>
                                <option value="RJ">Rio de Janeiro</option>
                                <option value="RN">Rio Grande do Norte</option>
                                <option value="RS">Rio Grande do Sul</option>
                                <option value="RO">Rondônia</option>
                                <option value="RR">Roraima</option>
                                <option value="SC">Santa Catarina</option>
                                <option value="SP">São Paulo</option>
                                <option value="SE">Sergipe</option>
                                <option value="TO">Tocantins</option>
                            </select>

                        </div>

                        <div className="perguntas">
                            <h1>Qual é seu nome?</h1>
                            <input type="text" placeholder='EX: João' onChange={e => setNome(e.target.value)} value={nome}  />
                        </div>

                        <div className="perguntas">
                            <h1>qual é seu email?</h1>
                            <input type="text" placeholder='EX: João1234@gmail.com' onChange={e => setEmail(e.target.value)} value={email}  />
                        </div>

                        <div className="perguntas">
                            <h1>Qual é seu numero?</h1>
                            <input type="text" placeholder='EX: 99 99999-9999' onChange={e => setTelefone(e.target.value)} value={telefone}  />
                        </div>

                    </div>

                    <div className="fim">
                        <div className="termos">
                         
                            <p>ao clicar eu concordo com os termos</p>
                        </div>
                        <button onClick={send}>SOLICITAR CONTATO</button>
                    </div>

                    </div>
                </div>
            )}

        </div>
    )
}