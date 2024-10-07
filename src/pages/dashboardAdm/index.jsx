import './index.scss';
import CabecalhoADM from '../../components/cabecalhoADM';
import { Link } from 'react-router-dom';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function DashboardAdm() {
    const [data, setData] = useState([]);
    const [totalImoveis, setTotalImoveis] = useState(0);
    const [totalCorretor, setTotalCorretor] = useState(0);
    const [totalCliente, setTotalCliente] = useState(0);


//total imovel
    async function imoveisTotais() {
        try {
            const response = await axios.get('http://localhost:8080/total/imoveis');
            console.log(response.data); 
            if (response.data && response.data.total_imoveis !== undefined) {
                setTotalImoveis(response.data.total_imoveis);
            } else {
                console.error('Resposta inesperada da API', response.data);
            }
        } catch (error) {
            console.error('Erro ao buscar o total de imóveis:', error);
        }
    }

    useEffect(() => {
        imoveisTotais();
    }, []);

//total corretor
async function corretorTotal() {
    try {
        const response = await axios.get('http://localhost:8080/total/corretor');
        console.log(response.data); 
        if (response.data && response.data.total_corretores !== undefined) {
            setTotalCorretor(response.data.total_corretores);
        } else {
            console.error('Resposta inesperada da API', response.data);
        }
    } catch (error) {
        console.error('Erro ao buscar o total de imóveis:', error);
    }
}    

useEffect(() => {
    corretorTotal();
}, []);


//total cliente

async function clienteTotal() {
    try {
        const response = await axios.get('http://localhost:8080/total/cliente');
        console.log(response.data); 
        if (response.data && response.data.total_clientes !== undefined) {
            setTotalCliente(response.data.total_clientes);
        } else {
            console.error('Resposta inesperada da API', response.data);
        }
    } catch (error) {
        console.error('Erro ao buscar o total de imóveis:', error);
    }
}    

useEffect(() => {
    clienteTotal();
}, []);


// grafico
    async function fetchData() {
        try {
            const vendidosResponse = await axios.get('http://localhost:8080/buscaSim');
            const naoVendidosResponse = await axios.get('http://localhost:8080/buscaNao');
            
            const vendidos = vendidosResponse.data.total_vendidos; 
            const naoVendidos = naoVendidosResponse.data.total_nao_vendidos;

            setData([
                { name: 'Vendidos', value: vendidos },
                { name: 'Não Vendidos', value: naoVendidos }
            ]);
        } catch (error) {
            console.error("Erro ao buscar dados: ", error);
        }
    }
    
    useEffect(() => {
        fetchData();
    }, []);


    const COLORS = ['#0088FE', '#FF8042']; 

    return (
        <div className="dashboard">
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

                <div className="infos">
                    <div className="reto">
                        <div className="bloco">
                            <h1>Total de clientes</h1>
                            <div className="card">
                                <p>{totalCliente} clientes</p>
                            </div>
                        </div>
                        <div className="bloco">
                            <h1>Total de Corretores</h1>
                            <div className="card">
                                <p>{totalCorretor}  Corretores</p>
                            </div>
                        </div>
                        <div className="bloco">
                            <h1>Total de Imoveis</h1>
                            <div className="card">
                                <p>{totalImoveis}  Imoveis</p>
                            </div>
                        </div>
                    </div>

                    <div className="grafico">
                        <h2>Vendas de Imóveis</h2>
                        <PieChart width={400} height={400}>
                            <Pie
                                data={data}
                                cx={200}
                                cy={200}
                                innerRadius={60}
                                outerRadius={120}
                                fill="#8884d8"
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </div>
                </div>
            </div>
        </div>
    );
}
