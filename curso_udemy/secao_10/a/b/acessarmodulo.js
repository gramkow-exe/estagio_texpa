const moduloA = require("../../moduloA")
console.log(moduloA.ola)

//sempre busca um arquivo index.js

const http = require("http")
http.createServer((req, res) => {
    res.write("Bom dia!")
    res.end()
}).listen(8080)