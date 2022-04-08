const a = 1
const b = 2
const c = 3
const obj1 = {a:a, b:b, c:c}
const obj2 = {a,b,c}

const nomeAttr = "nota"
const notaAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = notaAttr

const obj4 = {[nomeAttr]:[nomeAttr]}

const obj5 = {
    funcao1: function(){
        //...
    },
    funcao2(){
        //...
    }
}