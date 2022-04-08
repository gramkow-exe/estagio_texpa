const criarPessoa = nome =>  {
    this.nome = nome
    return{
        nome,
        falar:  () => {
            console.log(`Meu nome é ${this.nome}`)
        }
    }   
} //erro criei uma factory

var doglas = criarPessoa("Douglas")
doglas.falar()
console.log(doglas.nome)

// forma do professor

function Pessoa(nome){
    this.nome = nome //podemos passar parametros para func
    this.falar= function(){ //this torna publico
        console.log(`Meu nome é ${this.nome}`)
    }
}

doglas = new Pessoa("Douglas")  //utilzar new

doglas.falar()
