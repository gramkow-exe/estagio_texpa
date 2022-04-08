//coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = "Cadeira"
produto["marca do produto"] = "Generica"
produto.preco = 220
delete produto.preco

const carro = {
    modelo: "A4",
    valor: 89000,
    proprietario: {
        nome: "Raul",
        idade: 56,
        endereco: {
            logradouro: "Rua dildap",
            numero: 123
        }
    },
    condutores: [{
        nome: "Douglas",
        idade: 19
    }, {
        nome: "ANA"
    }],
    calcularalgo: function(){

    }
}
carro.proprietario.endereco.logradouro = "dozes"
carro["proprietario"]["endereco"]["numero"] = 12 //caso receba em str é bom7


