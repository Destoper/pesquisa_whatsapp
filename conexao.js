const Banco_Dados = require('mysql');

module.exports = Banco_Dados.createConnection({
    host: "192.168.0.100",
    user: "root",
    password: "root",
    database: "pesquisa"
})
