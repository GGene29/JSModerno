//Do while

//Se ejecuta al menos una vez, luego verifica la condición

let i = 0; //INICIO

// do {
// Codigo a ejecutar
// }while (CONDICION);

// //do {
// //    console.log(i);

// //    i++;//INCREMENTO

// //} while (i < -1); //CONDICION

//Inicio la variable
do {
    if(i % 5 === 0 && i % 3 === 0) {
        console.log(`Divisible entre 5 y 3 --> ${i}`);
    } else{
        console.log(i); 
    }
    i++; //Incremento
} while (i <= 38); //Condicion
