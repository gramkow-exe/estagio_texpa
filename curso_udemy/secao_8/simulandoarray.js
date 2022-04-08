const quaseArray = {0: "Rafael", 1:"Ana"}

Object.defineProperty(quaseArray, "toString", {
    value: function(){return Object.values(this)},
    enumerable: false
})

//simulando array com um obj
console.log(quaseArray[0])
console.log(quaseArray.toString())