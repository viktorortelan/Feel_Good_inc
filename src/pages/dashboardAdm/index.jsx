import './index.scss';
import CabecalhoADM from '../../components/cabecalhoADM';
import { Link } from 'react-router-dom';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

export default function DashboardAdm() {

    const data = [
        { name: 'Vendidos', value: 100 }, 
        { name: 'Não Vendidos', value: 50 },  
    ];

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
                    <Link to="/gestaoCorretor" >GESTÃO DE CORRETORES</Link>
                    <Link to="/dashboardAdm" >DASHBOARD</Link>
                </div>
            </div>
            <div className="direita">
                <CabecalhoADM />

                <div className="infos">
                    <div className="reto">
                        <div className="bloco">
                            <h1>Total de clientes</h1>
                            <div className="card">
                                <p>58 clientes</p>
                            </div>
                        </div>
                        <div className="bloco">
                            <h1>Total de Corretores</h1>
                            <div className="card">
                                <p>58 Corretores</p>
                            </div>
                        </div>
                        <div className="bloco">
                            <h1>Total de Imoveis</h1>
                            <div className="card">
                                <p>58 Imoveis</p>
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
