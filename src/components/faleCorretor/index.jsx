import './index.scss';


export default function Corretor() {

    return(
        <div className="corretor">
            <div className="titulo">
                <h1>FALE COM UM CORRETOR ONLINE</h1>
                <img src="/assets/images/chat.png" alt="balaoChat" />
            </div>

            <div id="linha"></div>

            <div className="infos">
                <div className="regiao">
                    <h1>Escolha a regional:</h1>
                    <select >
                        <option value="" disabled selected>Selecione o estado</option>
                        <option value="AC">Acre</option>
                        <option value="AL">Alagoas</option>
                        <option value="AP">Amapá</option>
                        <option value="AM">Amazonas</option>
                        <option value="BA">Bahia</option>
                        <option value="CE">Ceará</option>
                        <option value="DF">Distrito Federal</option>
                        <option value="ES">Espírito Santo</option>
                        <option value="GO">Goiás</option>
                        <option value="MA">Maranhão</option>
                        <option value="MT">Mato Grosso</option>
                        <option value="MS">Mato Grosso do Sul</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PA">Pará</option>
                        <option value="PB">Paraíba</option>
                        <option value="PR">Paraná</option>
                        <option value="PE">Pernambuco</option>
                        <option value="PI">Piauí</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="RN">Rio Grande do Norte</option>
                        <option value="RS">Rio Grande do Sul</option>
                        <option value="RO">Rondônia</option>
                        <option value="RR">Roraima</option>
                        <option value="SC">Santa Catarina</option>
                        <option value="SP">São Paulo</option>
                        <option value="SE">Sergipe</option>
                        <option value="TO">Tocantins</option>
                    </select>

                </div>

                <div className="perguntas">
                    <h1>Qual é seu nome?</h1>
                    <input type="text" placeholder='EX: João' />
                </div>

                <div className="perguntas">
                    <h1>qual é seu email?</h1>
                    <input type="text" placeholder='EX: João1234@gmail.com' />
                </div>

                <div className="perguntas">
                    <h1>Qual é seu numero?</h1>
                    <input type="text" placeholder='EX: 99 99999-9999' />
                </div>

            </div>

            <div className="fim">
                <div className="termos">
                    <input type="checkbox"  />
                    <p>Eu concordo com os termos de uso</p>
                </div>
                <button>SOLICITAR CONTATO</button>
            </div>

        </div>
    )
}