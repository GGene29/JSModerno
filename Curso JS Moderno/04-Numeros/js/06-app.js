//METODOS

const numero1 = "20";
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = 20;

console.log(numero1)
// para ver que tipo de dato es 
console.log(typeof numero1);

//Conversion de String a number

console.log(Number.parseInt(numero1));
console.log(numero1);

//Para numero NO enteros
console.log(Number.parseFloat(numero2));


//Si el numero es entero o no

console.log(Number.isInteger(numero4));
console.log(Number.isInteger(numero2));