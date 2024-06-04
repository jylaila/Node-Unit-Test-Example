module.exports = {
    //ambiente de teste que estamos executando
    testEnvironment : 'node',
    //matchers patner que os arquivos devem seguir para serem executador
    //qualquer arquivo que tenha extensão .js ou .js ou que esteja dentro de uma pasta test, ou que tenha uma extensão spec.test
    testMatch:['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)']
}