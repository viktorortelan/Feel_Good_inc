import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080'
});


export async function loginADM(email, senha) {
    
    const response = await api.post('/loginADM', {
        email: email,
        senha: senha
    });

    return response.data;

}