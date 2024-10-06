
import './index.scss';
import { Link } from 'react-router-dom';
import CabecalhoADM from '../../components/cabecalhoADM';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

export default function GestaoImovel () {
  const [pesquisa, setPesquisa] = useState('')
  const [array, setArray] = useState([]);

  async function a() {
      const a = await axios.get('http://localhost:8080/buscarImovel');
      const value = a.data;
      setArray(value);
      console.log(array);
  }

  useEffect(() => { a() });

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
            <Link to="/dashboardAdm" >DASHBOARD</Link>
          </div>
        </div>

        <div className="direita">
          <CabecalhoADM/>

          <div className="lupa">
            <input type="text" placeholder='pesquise aqui' value={pesquisa} onChange={e => setPesquisa(e.target.value)}/>
            <img src="/assets/images/lupaaa.png" alt="lupa" />
          </div>

          <div className="table">
                <table className=' tabela'>

                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Imóvel</th>
                    <th>Status</th>
                    <th>Corretor</th>
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
                      </tr>
                    ))
                  }
                </tbody>
                    
                </table>
            </div>
          


        </div>
      </div>
    );
}