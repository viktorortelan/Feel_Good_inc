import './index.scss';
import storage from 'local-storage';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function CabecalhoADM() {

    const [nome, setNome] = useState('')
    const navigate = useNavigate();

    useEffect(() => {

        if(!storage('adm-logado')) {
            navigate('/telalogin');
        }
        else {
            const admLogado = storage('adm-logado');
            setNome(admLogado.nome);
        }

    }, [])

    function sair() {
        storage.remove('adm-logado');
        navigate('/telalogin');
    }

    return (
        <div className="cabecalhoo">
            <h1>Seja bem-vindo, <span>{nome}</span></h1>
            
            <div className="direitinha">
                <button onClick={sair}>Sair</button>
                <img src="/assets/images/semfoto.png" alt="" />
            </div>
        </div>
    )
}