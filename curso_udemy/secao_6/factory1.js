const produto1 = {
    nome: "...",
    preco: 45
}

const produto2 = {
    nome: "...", //repetitivo
    preco: 45
}

//factory simples

function criarPessoa(){
    return {
        nome: "ana",
        sobrenome: "julia"
    }
}


function criarPessoa2(nome, sobrenome){
    return {
        nome,
        sobrenome
    }
}


// factorys podem retornar funções

douglas= criarPessoa2("Douglas", "Maia")
console.log(douglas)