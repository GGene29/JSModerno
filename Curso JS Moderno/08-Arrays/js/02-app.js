//ACCEDER A LOS VALORES DE UN ARRAY

const numeros = [10, 20, 30, 40, 50, 80, 90];

console.log(numeros);
//Si es muy complejo una manera de verlo con una mejor vista en table
console.table(numeros);

//Si accedemos a una posicion sin valor, sale undefine

console.log(numeros[3]);

console.log(numeros[8]);

console.log(numeros[0]);