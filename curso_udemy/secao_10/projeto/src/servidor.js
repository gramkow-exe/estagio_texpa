const porta = 3003 //processo

const express = require("express")
const app = express()
const bd = require("./bancodedados")
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/produtos", (req, res, next) => {
    console.log("Middleware 1")
    next()
})

//app.use atende todas as requisições

app.get("/produtos", (req, res, next) => {
    res.send(bd.getProdutos()) //converte para Json
})


app.get("/produtos/:id", (req, res, next) => {
    res.send(bd.getProduto(req.params.id))
})

app.post("/produtos", (req, res, next) => {
    const produto = bd.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

app.put("/produtos/:id", (req, res, next) => {
    const produto = bd.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

app.delete("/produtos/:id", (req, res, next) => {
    const produto = bd.excluirProduto(req.params.id)
    res.send(produto) //JSON
})

app.listen(porta, ()=>{
    console.log(`Servidor executando na porta ${porta}`)
})