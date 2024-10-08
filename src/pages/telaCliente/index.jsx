import './index.scss';
import Cabecalho from '../../components/cabecalho'
import Rodape from '../../components/rodape'
import { Link } from 'react-router-dom';
import CorretorPopup from '../../components/botaoPopup';
import Balao from '../../components/balaoSup';
import storage from 'local-storage';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';


export default function TelaCliente() {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')

    const [nomee, setNnome] = useState('');
    const [eemail, setEemail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [id, setId] = useState('');
    
    const [showEditPopup, setShowEditPopup] = useState(false); 



    const navigate = useNavigate();

    useEffect(() => {

        if(storage('cliente-logado')) {
            navigate('/telaCliente')
            const usuarioLogado = storage('cliente-logado');
            setNome(usuarioLogado.nome);
            setEmail(usuarioLogado.email);
        }
        else {
            navigate('/loginCliente')
        }

    }, [])

    function sairClick() {
        storage.remove('cliente-logado');
        navigate('/loginCliente')
    }

    function handleEditClick() {
        setShowEditPopup(true);
    }

    
    async function handleConfirmEdit() {
        try {
            await axios.put(`/atualizar/cliente/${encodeURIComponent(nome)}/${encodeURIComponent(email)}/${encodeURIComponent(telefone)}/${id}`);
            alert('Dados atualizados com sucesso!');
            setShowEditPopup(false); 
            const clienteAtualizado = { nomee, eemail, telefone, id };
            storage('cliente-logado', clienteAtualizado);
        } catch (error) {
            console.error('Erro ao atualizar dados:', error);
            alert('Erro ao atualizar os dados.');
        }
    }


    function handleCancelEdit() {
        setShowEditPopup(false); 
    }

    

    return(
        <div className="pgcliente">
            <Cabecalho/>

        <Balao/>

            <div className="seccao1">
                <div className="texto">
                    <img id='usuario' src="/assets/images/viktor.png" alt="usuario" />
                   <div className="intro">
                                    
                        <h1>Bem-vindo, <span>{nome}</span></h1>
                            <div className="email">
                                <img src="/assets/images/gmail.png" alt="gmail" />
                            
                                <p>{email}</p>
                            </div>
                   </div>
                </div>

                <div className="editar">
                    <img src="/assets/images/edit.png" alt="edit" />
                    <button onClick={handleEditClick}>EDITAR DADOS</button>
                    <button onClick={sairClick}>SAIR</button>
                </div>
            </div>

            <h1 id="atalho"><img src="/assets/images/seta.png" alt="seta" /> ATALHOS</h1>

            <div className="seccao2">
                <Link to="/contatos">
                    <h1>NOSSOS SUPORTE</h1>
                    <div className="caixinha">
                        <img src="/assets/images/balaoConversa.png" alt="balão" />
                        <p>Envie mensagem para nosso suporte, para que podemos tirar suas duvidas.</p>
                    </div>
                </Link>
                <Link to="/">
                    <h1>Fale com um corretor</h1>
                    <div className="caixinha">
                        <img id='contrato' src="/assets/images/contratoo.png" alt="balão" />
                        <p>Fale com um dos nossos corretores clicando no balão para poder fazer um orçamento.</p>
                    </div>
                        
                </Link>
                <Link to="/sobree">
                    <h1>Sobre nós</h1>
                    <div className="caixinha">
                        <img src="/assets/images/likee.png" alt="balão" />
                        <p>Conheça mais sobre nós, por meio da nossa historia.</p>
                    </div>
                </Link>
                <Link to="/">
                    <h1>Busque oportunidades</h1>
                    <div className="caixinha">
                        <img src="/assets/images/prediosicon.png" alt="balão" />
                        <p>Olhe nossas variedades de imoveis que mais combina com você.</p>
                    </div>
                </Link>
                
            </div>


            {showEditPopup && (
                <div className="edit-popup">
                    <div className="popup-content">
                        <h2>Editar Dados</h2>
                        <input
                            type="text"
                            placeholder="Nome"
                            value={nomee}
                            onChange={e => setNnome(e.target.value)}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={eemail}
                            onChange={e => setEemail(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Telefone"
                            value={telefone}
                            onChange={e => setTelefone(e.target.value)}
                        />
                        <div className="popup-buttons">
                            <button onClick={handleConfirmEdit}>Confirmar</button>
                            <button onClick={handleCancelEdit}>Cancelar</button>
                        </div>
                    </div>
                </div>
            )}

            <Rodape/>

        </div>
    )
}