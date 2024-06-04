//criando a classe LoginModel
module.exports = class LoginModel {
    //método construtor 
    constructor() { }

    isLogged() {
        return "Logado"
    }
}

const users = [
    {
        'nome': 'Daniela',
        'idade': 17
    },
    {
        'nome': 'João',
        'idade': 21,
    },
    {
        'nome': 'Pedro',
        'idade': 25,
    },
]