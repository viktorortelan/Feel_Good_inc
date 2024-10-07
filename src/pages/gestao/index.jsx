import './index.scss';
import { Link } from 'react-router-dom';
import CabecalhoADM from '../../components/cabecalhoADM';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function GestaoImovel() {
  const [mostrarPopup, setMostrarPopup] = useState(false);
  const [idSelecionado, setIdSelecionado] = useState(null);
  const [idSelecionadoLixo, setIdSelecionadoLixo] = useState(null);
  const [vendido, setVendido] = useState(false);
  const [mostrarEdicaoPopup, setMostrarEdicaoPopup] = useState(false);
  const [pesquisa, setPesquisa] = useState('');
  const [array, setArray] = useState([]);

  async function buscarImoveis() {
    const response = await axios.get('http://localhost:8080/buscarImovel');
    setArray(response.data);
  }

  useEffect(() => {
    buscarImoveis();
  }, []);

  function abrirPopup(id) {
    setIdSelecionadoLixo(id);
    setMostrarPopup(true);
  }

  function fecharPopup() {
    setMostrarPopup(false);
    setIdSelecionadoLixo(null);
  }

  async function confirmarRemocao() {
    try {
      console.log(idSelecionadoLixo); 
      await axios.delete(`http://localhost:8080/deletar/imovel/${idSelecionadoLixo}`);
      fecharPopup();
      buscarImoveis();
    } catch (error) {
      console.error('Erro ao remover o imóvel:', error);
      alert('Erro ao remover o imóvel. Tente novamente.');
    }
  }

  function abrirEdicaoPopup(id, statusVendido) {
    setIdSelecionado(id);
    setVendido(statusVendido); 
    setMostrarEdicaoPopup(true);
  }

  function fecharEdicaoPopup() {
    setMostrarEdicaoPopup(false);
    setIdSelecionado(null);
    setVendido(false); 
  }

  async function confirmarEdicao() {
    try {
        
        const response = await axios.put(`http://localhost:8080/atualizar/venda/${idSelecionado}`, { vendido });
        console.log("Resposta da API:", response.data); 
        fecharEdicaoPopup();
        alert('Status de venda atualizado com sucesso!');
        buscarImoveis();
    } catch (error) {
        console.error('Erro ao atualizar o status de venda:', error);
        alert('Erro ao atualizar o status de venda. Tente novamente.');
    }
}



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
          <Link to="/gestaoCorretor">GESTÃO DE CORRETORES</Link>
          <Link to="/dashboardAdm">DASHBOARD</Link>
        </div>
      </div>

      <div className="direita">
        <CabecalhoADM />

        <div className="lupa">
          <input type="text" placeholder='pesquise aqui' value={pesquisa} onChange={e => setPesquisa(e.target.value)} />
          <img src="/assets/images/lupaaa.png" alt="lupa" />
        </div>

        <div className="table">
          <table className='tabela'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Imóvel</th>
                <th>Status</th>
                <th>Corretor</th>
                <th>Vendido</th>
                <th>Editar</th>
                <th>Excluir</th>
              </tr>
            </thead>
            <tbody>
              {array
                .filter(item =>
                  item.id.toString().includes(pesquisa) ||
                  item.imovel.toLowerCase().includes(pesquisa.toLowerCase()) ||
                  item.status.toLowerCase().includes(pesquisa.toLowerCase()) ||
                  item.corretor.toLowerCase().includes(pesquisa.toLowerCase())
                )
                .map(item => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.imovel}</td>
                    <td>{item.status}</td>
                    <td>{item.corretor}</td>
                    <td>{item.vendido ? "sim" : "nao"}</td>
                    <td><img id='editar' src="/assets/images/edit.png" alt="edit" onClick={() => abrirEdicaoPopup(item.id, item.vendido)} /></td>
                    <td><img id='lixeira' src="/assets/images/lixeira.png" alt="lixo" onClick={() => abrirPopup(item.id)} /></td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>

        {mostrarPopup && (
          <div className="popup">
            <div className="popup-content">
              <h2>Tem certeza?</h2>
              <button id='esquerda' onClick={confirmarRemocao}>Confirmar</button>
              <button id='direita' onClick={fecharPopup}>Cancelar</button>
            </div>
          </div>
        )}

        {mostrarEdicaoPopup && (
          <div className="popup">
            <div className="popup-content">
              <h2>Atualizar Status de Venda</h2>
              <label>
                <input
                  type="checkbox"
                  checked={vendido}
                  onChange={() => setVendido(!vendido)} 
                />
                Vendido
              </label>
              <div className="popup-buttons">
                <button id='confirmar' onClick={confirmarEdicao}>Confirmar</button>
                <button id='cancelar' onClick={fecharEdicaoPopup}>Cancelar</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
