//Serve para comunicar diversas linguagens diferentes

const obj = { a: 1, b: 2, c:3, soma() {return a + b + c}}
console.log(JSON.stringify(obj))
console.log(JSON.parse('{"a":1,"b":2,"c":3}')) //precisa ter aspas duplas  //tanto o atributo quanto a str
// se for colocar aspas simples tem q colocar barra /' '/
