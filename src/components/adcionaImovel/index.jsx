import './index.scss';
import { useState } from 'react';
//import ItemCard from '../itemCard';
//import axios from 'axios';

export default function NovoCard({ setExibir }) {

     const [nomeApe, setNomeApe] = useState('');
     const [status, setStatus] = useState('');
     const [localiza, setLocaliza] = useState('');
     const [comodos, setComodos] = useState('');
     const [vagas, setVagas] = useState('');

    // async function novoCard() {

    //     await axios.post(`http://localhost:8080/enviar/${nomeApe}/${status}/${localiza}/${comodos}/${vagas}`);

    //     setNomeApe('');
    //     setStatus('');
    //     setLocaliza('');
    //     setComodos('');
    //     setVagas('');

    // }

    return (
        <div className="addimovel">
            <div className="add">
                <img src="/assets/images/addimovel.png" alt="addimovel" />
                <div className="botoes">
                    <button>Remover imagem</button>
                </div>
            </div>
            
            <div className="infos">
                <h1>ADICIONAR IMÓVEL</h1>
                <input type="text" placeholder='Nome do apartamento' value={nomeApe} onChange={e => setNomeApe(e.target.value)} />
                <input type="text" placeholder='Status' value={status} onChange={e => setStatus(e.target.value)} />
                <input type="text" placeholder='Região' value={localiza} onChange={e => setLocaliza(e.target.value)} />
                <input type="text" placeholder='Lugar'/>
                <input type="text" placeholder='Suites'/>
                <input type="text" placeholder='Qtd de cômodos e tamanho' value={comodos} onChange={e => setComodos(e.target.value)} />
                <input type="text" placeholder='Vagas de garagem' value={vagas} onChange={e => setVagas(e.target.value)} />
                <h1>Sobre o imovel</h1>
                <p id='galeria'>Galeria de Fotos</p>

                    <div className="galeria">
                    <img src="/assets/images/addimovel.png" alt="addimovel" />
                    <img src="/assets/images/addimovel.png" alt="addimovel" />
                    <img src="/assets/images/addimovel.png" alt="addimovel" />
                    <img src="/assets/images/addimovel.png" alt="addimovel" />
                    </div>
                    <button id='removerIMG'>Remover imagens</button>

                <input type="text" placeholder='Titulo sobre o imovel' />
                <textarea name="" id=""></textarea>






                {/* coloca a função */}
                <button >Cadastrar</button>
            </div>
        </div>
    );
}
