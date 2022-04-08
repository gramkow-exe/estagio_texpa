class Pessoa {
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
} // no navegador nao apontaria para o nome certo

const p1 = new Pessoa("João")
p1.falar()

const criarPessoa = nome => {
    return{
        falar: () => console.log(`Meu nome é ${nome}`)
    }
} // apontaria para o nome certo no navegador

const p2 = criarPessoa("João")
p2.falar()