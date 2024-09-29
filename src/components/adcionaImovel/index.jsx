import './index.scss';
import { useState } from 'react';
import ItemCard from '../itemCard';
import axios from 'axios';

export default function NovoCard({ setExibir }) {


     const [capa, setCapa] = useState(null);
     const [nome, setNome] = useState('');
     const [status, setStatus] = useState('');
     const [regiao, setRegiao] = useState('');
     const [lugar, setLugar] = useState('');
     const [suites, setSuites] = useState('');
     const [comodos, setComodos] = useState('');
     const [vagas, setVagas] = useState('');
     const [galeria, setGaleria] = useState(null);
     const [titulo, setTitulo] = useState('');
     const [sobre, setSobre] = useState('');
    
    async function executar() {

        const formData = new FormData();
        formData.append('img', capa);

        let x = await axios.post('http://localhost:8080/multer', formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });

        const formData2 = new FormData();
        formData2.append('img', galeria);

        let z = await axios.post('http://localhost:8080/multer', formData2, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });

        let nomeCapa = x.data.fl
        let nomeGaleria = z.data.fl

        await axios.post(`http://localhost:8080/addImoveis/${nomeCapa}/${nomeGaleria}/${nome}/${status}/${regiao}/${lugar}/${suites}/${comodos}/${vagas}/${titulo}/${sobre}`);

        setCapa(null);
        setGaleria(null);
        setNome('');
        setStatus('');
        setRegiao('');
        setLugar('');
        setSuites('');
        setComodos('');
        setVagas('');
        setTitulo('');
        setSobre('');

    }
    
    

    return (
        <div className="addimovel">
            <div className="add">
                <input type="file" onChange={e => setCapa(e.target.files[0])} />
                <img src="/assets/images/addimovel.png" alt="addimovel" />
                <div className="botoes">
                    <button>Remover imagem</button>
                </div>
            </div>
            
            <div className="infos">
                <h1>ADICIONAR IMÓVEL</h1>
                <input type="text" placeholder='Nome do apartamento' onChange={e => setNome(e.target.value)} value={nome}/>
                <input type="text" placeholder='Status' onChange={e => setStatus(e.target.value)} value={status}/>
                <input type="text" placeholder='Região' onChange={e => setRegiao(e.target.value)} value={regiao}/>
                <input type="text" placeholder='Lugar'onChange={e => setLugar(e.target.value)} value={lugar}/>
                <input type="text" placeholder='Suites'onChange={e => setSuites(e.target.value)} value={suites}/>
                <input type="text" placeholder='Qtd de cômodos e tamanho' onChange={e => setComodos(e.target.value)} value={comodos}/>
                <input type="text" placeholder='Vagas de garagem' onChange={e => setVagas(e.target.value)} value={vagas}/>
                <h1>Sobre o imovel</h1>

                <p id='galeria'>Galeria de Fotos</p>

                <input type="file" onChange={e => setGaleria(e.target.files[0])} />

                    <div className="galeria">
                    <img src="/assets/images/addimovel.png" alt="addimovel" />
                    <img src="/assets/images/addimovel.png" alt="addimovel" />
                    <img src="/assets/images/addimovel.png" alt="addimovel" />
                    <img src="/assets/images/addimovel.png" alt="addimovel" />
                    </div>
                    <button id='removerIMG'>Remover imagens</button>

                <input onChange={e => setTitulo(e.target.value)} value={titulo} type="text" placeholder='Titulo sobre o imovel' />
                <textarea onChange={e => setSobre(e.target.value)} value={sobre}></textarea>

                <button onClick={executar} >Cadastrar</button>
            </div>
        </div>
    );
}
