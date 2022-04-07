function teste1(num){
    if (num> 7) 
        console.log(num) // sem {} so tem relação com o primeiro
        console.log("Final") // sem relação
    
}

function teste2(num){
    if (num> 7); { 
        console.log(num) // nada relacionado devido ao ;
        console.log("Final") 

    }
}

