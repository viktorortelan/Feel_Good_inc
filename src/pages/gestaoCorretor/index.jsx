
import './index.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import CabecalhoADM from '../../components/cabecalhoADM';

export default function GestaoCorretor() {
    const [pesquisa, setPesquisa] = useState('')
    const [array, setArray] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [editCorretor, setEditCorretor] = useState({ id: '', nome: '', email: '', senha: '' });

    async function a() {
        const a = await axios.get('http://localhost:8080/buscar/corretor');
        const value = a.data;
        setArray(value);
        console.log(array);
    }

    useEffect(() => { a() });

    const handleEdit = (corretor) => {
        setEditCorretor({
            id: corretor.id_corretor,
            nome: corretor.nm_adm,
            email: corretor.ds_email,
            senha: corretor.ds_senha
        });
        setShowPopup(true);
    };

    const handleUpdate = async () => {
        try {
            await axios.put(`http://localhost:8080/atualizar/corretor/${editCorretor.nome}/${editCorretor.email}/${editCorretor.senha}/${editCorretor.id}`);
            setShowPopup(false);
            a(); 
        } catch (error) {
            console.error('Erro ao atualizar corretor:', error);
        }
    };


    

    return (
        <div className="gestaoCorretor">
            <div className="esquerda">

                <div className="intro">
                    <img src="/assets/images/loganfeelgood.png" alt="logan" />
                    <div className="texto">
                        <h1> FEEL GOOD INC</h1>
                        <p>ADMIN PAINEL</p>
                    </div>

                </div>
                <div className="botoes">

                    <Link to="/addimovel" >ADICIONAR IMOVEL</Link>
                    <Link to="/gestao" >GESTÃO DE IMOVEIS</Link>
                    <Link to="/gestaoCliente" >GESTÃO DE CLIENTE</Link>
                    <Link to="/gestaoCorretor" >GESTÃO DE CORRETORES</Link>
                    <Link to="/dashboardAdm" >DASHBOARD</Link>
                </div>
            </div>

            <div className="direita">
                <CabecalhoADM/>

                <div className="lupa">
                    <input type="text" placeholder='pesquise' value={pesquisa} onChange={e => setPesquisa(e.target.value)} />   
                    <img src="/assets/images/lupaaa.png" alt="lupa" />
                </div>

                <div className="table">
                <table className='tabela'>
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Nome do Corretor</th>
                        <th>Gmail</th>
                        <th>senha/protocolo</th>
                        <th>Editar</th>
                        <th>Excluir</th>
                        </tr>
                    </thead>

                    <tbody>
                        {array
                        .filter(item =>
                            item.id_corretor.toString().includes(pesquisa) || 
                            item.nm_adm.toLowerCase().includes(pesquisa.toLowerCase()) || 
                            item.ds_email.toLowerCase().includes(pesquisa.toLowerCase()) || 
                            item.ds_senha.toLowerCase().includes(pesquisa.toLowerCase()) 
                        )
                        .map(item => (
                            <tr key={item.id_corretor}>
                            <td>{item.id_corretor}</td>
                            <td>{item.nm_adm}</td>
                            <td>{item.ds_email}</td>
                            <td>{item.ds_senha}</td>
                            <td><img id='editar' src="/assets/images/edit.png" alt="edit" onClick={() => handleEdit(item)}/></td>
                            <td><img id='lixeira' src="/assets/images/lixeira.png" alt="lixo" /></td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>

                </div>

            </div>

            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <h2>Editar Corretor</h2>
                        <label>Nome:</label>
                        <input
                            type="text"
                            value={editCorretor.nome}
                            onChange={e => setEditCorretor({ ...editCorretor, nome: e.target.value })}
                        />
                        <label>Email:</label>
                        <input
                            type="email"
                            value={editCorretor.email}
                            onChange={e => setEditCorretor({ ...editCorretor, email: e.target.value })}
                        />
                        <label>Senha:</label>
                        <input
                            type="password"
                            value={editCorretor.senha}
                            onChange={e => setEditCorretor({ ...editCorretor, senha: e.target.value })}
                        />
                        <div className="popup-buttons">
                            <button onClick={handleUpdate}>Confirmar</button>
                            <button onClick={() => setShowPopup(false)}>Cancelar</button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}