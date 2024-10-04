import './index.scss';
import direita from '../../assets/images/imovelCadastro.png'
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { cadastroCliente } from '../../api/clienteApi';
import { toast, ToastContainer } from 'react-toastify';




export default function CadastroCliente() {

     const [nome, setNome] = useState('');
     const [email, setEmail] = useState('');
     const [telefone, setTelefone] = useState('');


    function formatDate(data) {
        const dia = String(data.getDate()).padStart(2, '0');
        const mes = String(data.getMonth()+1).padStart(2, '0');
        const ano = String(data.getFullYear());

        return `${ano}-${mes}-${dia}`;

    }


    // function executar() {

       
    //     setNome('')
    //     setTelefone('');
    //     setEmail('');


    // }

    const navigate = useNavigate();

    async function cadastrar() {
        
        try {
            
            await cadastroCliente(nome, email, telefone);

            const date = new Date();

            const x = formatDate(date);
            console.log(x);
    
            await axios.put(`http://localhost:8080/addClient/${x}/${email}`);

            setTimeout(() => {
                navigate('/loginCliente')
            }, 1200);

    

        } catch (err) {
            
            if(err.response)
                toast.error(err.response.data.err);
            else 
                toast.error(err.message);

        }

    }


    return (
        <div className="cadastroLogin">

            <div className="esquerda">
            <Link id='voltar' to="/"> Voltar</Link>
                <div className="textin">
                    <img src="/assets/images/loganTCC7.png" alt="logo empresa" />  
                    <h1>Feel good inc.</h1>

                </div>

                <h1 id='façaLogin'>Faça Parte da família! 
                   <span> Feel Good INC.</span></h1>
                
                <div className="cadastro">
                    <div className="inputs">
                        <p>Seu Nome:</p>
                        <input onChange={e => setNome(e.target.value)} value={nome} type="text" placeholder='ex: joão' />
                        <img id='pessoa' src="/assets/images/pessoalIcon.svg" alt="" />
                    </div>
                    <div className="inputs">
                        <p>Seu Email:</p>
                        <input onChange={e => setEmail(e.target.value)} value={email} type="text" placeholder='ex: user@gmail.com'/>
                        <img id='aviao' src="/assets/images/aviaozin249.png" alt="" />
                    </div>
                    <div className="inputs">
                        <p>Seu Telefone:</p>
                        <input onChange={e => setTelefone(e.target.value)} value={telefone} type="text" placeholder='ex: 11 11111-1111' />
                        <img id='tell' src="/assets/images/tellIcon.png" alt="" />
                    </div>
                      
                    <button onClick={cadastrar}>Cadastrar</button>
                    <Link to="/loginCliente">Ja tenho Conta</Link>
                </div>

                <p id='copyright'> ©feelgoodind copyright</p>

            </div> 

            <div className="direita" style={{backgroundImage: `url(${direita})`}}></div>
        </div>

    )
}