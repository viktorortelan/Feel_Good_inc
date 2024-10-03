import './index.scss';
import { useEffect, useState } from 'react';
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
    const [galeria2, setGaleria2] = useState(null);
    const [galeria3, setGaleria3] = useState(null);
    const [galeria4, setGaleria4] = useState(null);
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

    function ex1() {
        document.getElementById('img1').click();
    }

    function ex2() {
        document.getElementById('img2').click();
    }

    function ex3() {
        document.getElementById('img3').click();
    }

    function ex4() {
        document.getElementById('img4').click();
    }

    function ex5() {
        document.getElementById('img5').click();
    }

    function ex2V1() {
        if (capa != null) {
            document.getElementById('clickImg1').style.backgroundImage = `url(${URL.createObjectURL(capa)})`
        }
    }

    function ex2V2() {
        if (galeria != null) {
            document.getElementById('clickImg2').style.backgroundImage = `url(${URL.createObjectURL(galeria)})`
        }
    }

    function ex2V3() {
        if (galeria2 != null) {
            document.getElementById('clickImg3').style.backgroundImage = `url(${URL.createObjectURL(galeria2)})`
        }
    }

    function ex2V4() {
        if (galeria3 != null) {
            document.getElementById('clickImg4').style.backgroundImage = `url(${URL.createObjectURL(galeria3)})`
        }
    }

    function ex2V5() {
        if (galeria4 != null) {
            document.getElementById('clickImg5').style.backgroundImage = `url(${URL.createObjectURL(galeria4)})`
        }
    }

    function testEx2() {
        if (capa != null || galeria != null) {
            ex2V1();
            ex2V2();
            ex2V3();
            ex2V4();
            ex2V5();
        }
    }

    useEffect(() => { testEx2() });

    return (
        <div className="addimovel">
            <div className="add">
                <div onClick={ex1} id='clickImg1' className='formatInput'> <input id='img1' type="file" onChange={e => setCapa(e.target.files[0])} /> <p>+</p> </div>
                <div className="botoes">
                    <button>Remover imagem</button>
                </div>
            </div>

            <div className="infos">
                <h1>ADICIONAR IMÓVEL</h1>
                <input type="text" placeholder='Nome do apartamento' onChange={e => setNome(e.target.value)} value={nome} />
                <input type="text" placeholder='Status' onChange={e => setStatus(e.target.value)} value={status} />
                <input type="text" placeholder='Região' onChange={e => setRegiao(e.target.value)} value={regiao} />
                <input type="text" placeholder='Lugar' onChange={e => setLugar(e.target.value)} value={lugar} />
                <input type="text" placeholder='Suites' onChange={e => setSuites(e.target.value)} value={suites} />
                <input type="text" placeholder='Qtd de cômodos e tamanho' onChange={e => setComodos(e.target.value)} value={comodos} />
                <input type="text" placeholder='Vagas de garagem' onChange={e => setVagas(e.target.value)} value={vagas} />
                <h1>Sobre o imovel</h1>

                <p id='galeria'>Galeria de Fotos</p>

                <div className="galeria">
                    <div onClick={ex2} id='clickImg2' className='formatInput'> <input id='img2' type="file" onChange={e => setGaleria(e.target.files[0])} /> <p>+</p> </div>
                    <div onClick={ex3} id='clickImg3' className='formatInput'> <input id='img3' type="file" onChange={e => setGaleria2(e.target.files[0])} /> <p>+</p> </div>
                    <div onClick={ex4} id='clickImg4' className='formatInput'> <input id='img4' type="file" onChange={e => setGaleria3(e.target.files[0])} /> <p>+</p> </div>
                    <div onClick={ex5} id='clickImg5' className='formatInput'> <input id='img5' type="file" onChange={e => setGaleria4(e.target.files[0])} /> <p>+</p> </div>
                </div>

                <button id='removerIMG'>Remover imagens</button>

                <input onChange={e => setTitulo(e.target.value)} value={titulo} type="text" placeholder='Titulo sobre o imovel' />
                <textarea onChange={e => setSobre(e.target.value)} value={sobre}></textarea>

                <button onClick={executar} >Cadastrar</button>
            </div>
        </div>
    );
}
