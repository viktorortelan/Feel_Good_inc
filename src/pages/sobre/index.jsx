import './index.scss'
import { Link } from "react-router-dom"

export default function Sobre() {
    return(
        <div className="SobreNos">
            <div className="cabecalho">
                <div className="img">
                <img src="/assets/images/loganfeelgood.png" alt="ovo" />
                </div>
                <Link to="/">Home</Link>
                <Link to="/imovel">Imoveis</Link>
                <Link to="/">Corretor online</Link>
                <Link to="/contato">Contatos</Link>
                <Link to="/sobre">Sobre nós</Link>
            </div>

            <div className="historia">
                <h1>CONHEÇA A FEEL GOOD INC</h1>

                <div className="apresentacao">
                    
                    <div className="textSobre">
                        <h1>Sobre a Feel Good Inc.</h1>
                        <p>A Feel Good Inc. nasceu da paixão de seus fundadores pelo  mercado imobiliário e o desejo de oferecer experiências únicas e  positivas aos seus clientes. Fundada em 2024, nossa empresa tem  como missão principal transformar o processo de compra, venda  e aluguel de imóveis em uma jornada memorável e gratificante.
                        </p>
                    </div>
                    

                    <div className="imgFeelGood">
                        <img src="/assets/images/loganfeelgood.png" alt="" id='imgCoracao' />
                    </div>
                    
                </div>

                <div className="Origem">
                    <div className="textValores">
                        <h1>Origens e Valores:</h1>

                        <p>A história da Feel Good Inc. começou quando seus fundadores, Victor Ortelan, Heitor Guimarões, Kauã Sousa, Matheus Moura, decidiram unir suas habilidades e conhecimentos para criar uma imobiliária com um diferencial marcante: não apenas atender às necessidades imobiliárias dos clientes, mas também superar suas expectativas, proporcionando um serviço personalizado e humano.
                        
                        <p className='um'>Nossos valores fundamentais são a transparência, a ética e o compromisso com a excelência. Acreditamos que cada cliente merece ser tratado com respeito e cuidado, e é por isso que investimos em relações de longo prazo, baseadas na confiança mútua e na honestidade.</p>
                        </p>
                    </div>

                    <div className="imgConstrucao">
                            <img src="/assets/images/parede.png" alt="" />

                            <div className="texto">
                              <p>Mais de</p>
                              <p className='cor'>16 Milhões</p>
                              <p>de m² construídos</p>  
                            </div>
                            
                    </div>

                </div>

            <div className="especializacao">
                <div className="textServicos">
                    <h1>Especializações e Serviços</h1>

                    <p>Especializada em residencial, a Feel Good Inc. oferece uma ampla gama de serviços que abrangem desde a consultoria personalizada até a gestão completa de imóveis. Nosso time de profissionais altamente qualificados está sempre pronto para guiar nossos clientes em cada etapa do processo, assegurando que suas necessidades sejam atendidas de maneira eficaz e eficiente.
                    </p>
                </div>
                    <div className="premiacoes">
                        <img src="/assets/images/trofeu.png" alt="" id='imgTrofeu' />
                        <div className="texto">
                           <p className='cor'>97 vezes</p>
                            <p>premiada</p> 
                        </div>
                        
                    </div>
            </div>

            <div className="compromisso">
                
                <h1>Compromisso com a Comunidade</h1>

                <p>Além de nosso compromisso com a excelência no atendimento ao cliente, a Feel Good Inc. também se orgulha de seu papel ativo na comunidade local. Participamos de iniciativas sociais e ambientais que visam melhorar a qualidade de vida na região, contribuindo para um futuro mais sustentável e inclusivo.    </p>
            </div>

            <div className="visao">
                <h1>VISÃO FUTURA</h1>

                <p>À medida que olhamos para o futuro, nossa visão é expandir nossas operações de maneira responsável, mantendo sempre o foco na qualidade e na satisfação do cliente. Queremos continuar sendo reconhecidos não apenas como uma imobiliária de sucesso, mas como um parceiro confiável e comprometido com o bem-estar de nossos clientes e da comunidade em geral.
                </p>

                <p>Na Feel Good Inc, estamos prontos para fazer parte da sua jornada imobiliária, transformando sonhos em realidade e garantindo que cada passo seja uma experiência verdadeiramente positiva.</p>
            </div>

        </div>

        <div className="feedback">

            <h1>Nossos principais feedbacks:</h1>

            <div className="avaliar">
                <p>DEIXE SEU FEEDBACK</p>
                <input type="text" placeholder='Digite aqui...' />
            </div>
        </div>
        <Link to="/"><img src="/assets/images/loganfeelgood.png" alt="balão de suporte" id="suporte" /></Link>

        <div className="rodape">
                <div className="rodainfo1">
                    <p>FEEL GOOD INC</p>
                    <div className="imagens">
                        <Link to=""><img src="/assets/images/insta.png" alt="insta" /></Link>
                        <Link to="www.linkedin.com/in/joaovictorortelandonascimento"><img src="/assets/images/linkedin.png" alt="linkedin" /></Link>
                        <Link to=""><img src="/assets/images/whatsapp.png" alt="whatsapp" /></Link>
                        
                    </div>
                
                </div>
                    <div className="RiscoBranco"></div>
                    <div className="meioRodape">

                        <div className="esquerda">
                            <h1>Paginas</h1>
                            <Link to="/">Home</Link>
                            <Link to="/">Corretor online</Link>
                            <Link to="/contato">Contatos</Link>
                            <Link to="/">Sobre nós</Link>
                        </div>

                        <div className="direita">
                            <h1>Ajuda</h1>
                            <Link to="/">Reclame aqui</Link>
                            <Link to="/">Email de Contato</Link>
                            <Link to="/">Sustentabilidade</Link>
                        </div>
                    </div>
                    <div className="reta">
                        <div className="RiscoBranco2"></div>
                    </div>
                    <h1 id='fimRodape'>FEEL GOOD INC - Stratton oakmont S/A. - CNPJ 13.800.191/0001-69 - CEP 04773-000. Av. Coronel Octaviano de Freitas Costa, 463 - Socorro, São Paulo</h1>
            </div>
        </div>
    )
}