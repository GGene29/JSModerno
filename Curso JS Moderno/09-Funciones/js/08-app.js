//Funciones que retornar valores

function sumar (a, b) {
    console.log( 3 + 5);
}

sumar();
//Para que si se puedan retornar valores se trabaja con los returns


function multiplicar (a, b) {
    return a* b ;
}

//Cuando se tiene un return
// se debe tener otra variable a la cual se le asigna el resultado.

const totales = multiplicar(5,5);
console.log(totales);

// Ejemplo mas avanzado 
let total = 0;

function newArticle(precio) {
    return total += precio;
}; 

function impuesto(total) {
    return total * 1.15;
};


total = newArticle(80);
total = newArticle(100);


// console.log(`Monto total ${total}`);

const totalPagar = impuesto(total);

console.log(`Total a pagar mas impuesto ${totalPagar}`)
console.log(total)