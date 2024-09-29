
import './index.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import CabecalhoADM from '../../components/cabecalhoADM';

export default function GestaoCliente() {

    const [array, setArray] = useState([]);

    async function a() {
        const a = await axios.get('http://localhost:8080/buscar');
        const value = a.data;
        setArray(value);
        console.log(array);
    }

    useEffect(() => { a() });

    return (
        <div className="gestaoCliente">
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
                </div>
            </div>

            <div className="direita">
                <CabecalhoADM/>

                <div className="lupa">
                    <input type="text" placeholder='Nome do imovel' />
                    <img src="/assets/images/lupaaa.png" alt="lupa" />
                </div>

                <div className="table">
                    <table className=' tabela'>

                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>nome do usuario</th>
                                <th>Gmail</th>
                                <th>telefone</th>
                                <th>Data</th>
                            </tr>
                        </thead>

                        <tbody>

                            {array.map(item =>
                                <tr>
                                    <td>{item.id_cliente}</td>
                                    <td>{item.nm_cliente}</td>
                                    <td>{item.ds_email}</td>
                                    <td>{item.ds_telefone}</td>
                                    <td>{item.dt_cadastro.substring(0, 10)}</td>
                                </tr>)


                            }



                        </tbody>

                    </table>
                </div>

            </div>


        </div>
    )
}