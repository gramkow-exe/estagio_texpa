const prod1 = {

}// cria um objeto

prod1.nome = "Celular Ultra Mega"
prod1.valor = 499.99
prod1["Desconto legal"] = 0.40 // evitar atributos com espaço

// objetos são estruturados sempre em chave e valor

console.log(prod1)

const prod2 = {
    nome: "Camisa Polo",
    preco: 79.90,
    obj: {
        blabla: 1
    }
}

//json nao é a mesma coisa que objeto
//json é a forma textual
//utiliza aspas duplas para atributos
