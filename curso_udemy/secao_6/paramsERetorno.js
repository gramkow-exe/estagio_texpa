function area(l, a){
    const area = l * a
    if (area>20){
        console.log(`valor acima do permitido ${area}m2`)
    }else{
        return area
    }
}
console.log(area(2,2))
console.log(area(2))
console.log(area())
console.log(area(2,2,2))
console.log(area(20,2))