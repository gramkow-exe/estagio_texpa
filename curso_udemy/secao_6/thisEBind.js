const pessoa = {
    saudacao: "Bom dia",
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar
falar()

const flarDePessoa = pessoa.falar.bind(pessoa)
flarDePessoa()