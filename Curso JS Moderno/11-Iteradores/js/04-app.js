//WHILE
//ITERADOR Cumple mientras la condición sea verdadera



let i = 0; // Inicializar while

// while(i < 10) /*Condición*/{
    
//     console.log(`Numeros ${i}`);
  
//     i++; //Incremento
// }


while (i < 100) {

    if(i % 3 === 0 && i % 5 === 0){
        console.log('FIZZBUZZ!');
    }else if (i % 5 === 0){
        console.log('BUZZ');
    }else if(i % 3 === 0) {
        console.log('FIZZ');
    }else{
        console.log(i);
    }
    i++;    
}

//En los while no se puede usar los continue




