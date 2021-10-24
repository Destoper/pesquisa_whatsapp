var faker = require('faker-br');
const conexao = require('../conexao');
const time = require('../config/dataHora');

function cel(){
    let digit =  Math.floor(10* Math.random()) 
    let tot = ""
    for (let index = 0; index < 8; index++) {
        let digit =  Math.floor(10* Math.random()) 
        tot = tot + digit
    }
    return tot
}


function gravar(){
    return new Promise((resolve, reject)=>{        
        let nota =  Math.floor(10* Math.random())        
        let nome = `${faker.name.firstName()} ${faker.name.lastName()}`;
        let num = `5575${cel()}@c.us`;
        let sql = `INSERT INTO pesquisas (titulo, pergunta, usuario, finalizado, resposta, cliente, idchat, hora_resp) VALUES ('Pesquisa de Confiabilidade', 'Sendo 10 confio totalmente e 0 não confio de forma alguma, o quanto você confia os seus dados à nossa empresa ? Por favor, responda apenas com números.', 'Márcio', 'sim', '${nota}', '${nome}', '${num}', NOW())`;
        conexao.query(sql, function(erro, resultado, parametros){
            if(erro){
                reject(erro);
            }else{
                resolve("Pergunta gravada com sucesso!");
            }
        });

    });
}

async function chamar(){
    for (let index = 0; index < 50; index++){
        await gravar().then((res)=>{
            console.log(time(), res)
        }).catch((er)=>{
            console.log(time(), er)
        })
    }
}

chamar()