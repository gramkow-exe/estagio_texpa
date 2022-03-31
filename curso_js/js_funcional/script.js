// function declaration

function sayHello(){
    console.log("Hello!")
};

// function call

sayHello()

// Declaration with parameters

function sayHelloTo(name){
    console.log("Hello" + name)
    console.log(`Hello ${name}`)

};

// Function call with parameters

sayHelloTo("Igor")


// Function return
function returnHi(){
    return "Hi"
};

function returnHiTo(name){
    return `Hi ${name}`  //"interpolar"
};

let greeting = returnHi()
console.log(greeting)
console.log(returnHiTo("IGAO"));

// Anonymous Function

(function (a,b,c){
    console.log(a + b + c) 
});

//IIFE - Imeadiately Invoked Function

(function (a,b,c){
    console.log(a + b + c)
})(1,2,3);

(function (){
    console.log(1 + 2 + 3)
})();

(() => {
    console.log(1 + 2 + 3) //arrow
})();

(() => console.log(1 + 2 + 3))(); //arow


// Function Expression

var func = function (a,b,c){
    return a + b +c
}

const result = console.log(sum(7,59))

const otherFunc = func
console.log(otherFunc(2,4,5))



// Function arrow
//Always anonymous

const increment = function(n){ //se colocar nome ele descarta
    return n + 1
}

const increment2 = (n) => {
    return n + 1
}

const increment3 = n => { // unecessary () if its only one parameter
    return n + 1
}

const increment4 = n => n + 1 //return all line (return tag not necessary)


// Paramaters

// Discart the extra parameters
// Define the standart value on the parentheses, ex : function (a = 2, b, c)

// To pass many parameters like a array using spread/rest, ex: function logNums(...nums){}

