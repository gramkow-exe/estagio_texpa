// cadeia de prototipos
Object.prototype.attr0 = "0" //cuidado
const avo = { attr1: "A"}
const pai = { __proto__: avo, attr2: "B", att3: "D"}
const filho = {__proto__:pai, attr3: "C"}
console.log(filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerar(delta){
        if (this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h`
    }

}

const ferrari = {
    modelo: "F40",
    velMax: 340
}

const volvo = {
    modelo: "F40",
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)


volvo.acelerar(100)
console.log(volvo.status())