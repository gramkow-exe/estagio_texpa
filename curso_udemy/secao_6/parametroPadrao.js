// estrategia 1 para gerar valor padrao

function soma1(a,b,c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1())

// estrategia 2,3,4 para gerar valor padrao

function soma2(a,b,c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c  // mais segura
    return a + b + c
}

console.log(soma2())

// estrategia 5: es2015

function soma3(a=1,b=1,c=1){
    return a + b + c
}
console.log(soma3())